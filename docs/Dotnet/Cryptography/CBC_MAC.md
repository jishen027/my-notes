# CBC MAC encryption for image data

## Overview
This implementation demonstrates CBC-MAC (Cipher Block Chaining Message Authentication Code) for authenticating image data. Key features:

- Uses AES-256 in CBC mode for encryption
- Generates a MAC from the final ciphertext block
- Includes PKCS#7 padding for block alignment
- Provides verification with constant-time comparison
- Handles both file and byte array inputs

## Security Considerations
- The MAC is derived from the last ciphertext block
- Uses CryptographicOperations.FixedTimeEquals for verification
- Proper padding ensures complete blocks
- Random IVs should be used for each message

```csharp
using System;
using System.IO;
using System.Security.Cryptography;

class Program
{
    static void Main(string[] args)
    {
        string imagePath = "Image/mysql.jpg";
        string ciphertextPath = "Image/mysql.ciphertext.bin";
        string macPath = "Image/mysql.mac.bin";
        string decryptedPath = "Image/mysql.decrypted.jpg";
        
        // Generate random key and IV for each encryption
        using (Aes aes = Aes.Create())
        {
            aes.KeySize = 256; // Use 256-bit AES encryption
            aes.GenerateKey();
            aes.GenerateIV();
            
            // Encrypt the image and get ciphertext + MAC
            var (ciphertext, mac) = EncryptImage(imagePath, aes.Key, aes.IV);
            
            // Store ciphertext and MAC separately
            File.WriteAllBytes(ciphertextPath, ciphertext);
            File.WriteAllBytes(macPath, mac);
            Console.WriteLine($"Ciphertext saved to {ciphertextPath}");
            Console.WriteLine($"MAC saved to {macPath}");
            
            // Read back ciphertext and MAC for verification
            byte[] storedCiphertext = File.ReadAllBytes(ciphertextPath);
            byte[] storedMac = File.ReadAllBytes(macPath);
            
            // Decrypt the image
            byte[] decryptedData = DecryptImage(storedCiphertext, aes.Key, aes.IV);
            File.WriteAllBytes(decryptedPath, decryptedData);
            Console.WriteLine($"Image decrypted and saved to {decryptedPath}");
            
            // Verify using stored MAC
            byte[] original = File.ReadAllBytes(imagePath);
            bool verified = VerifyMac(original, aes.Key, aes.IV, storedMac);
            Console.WriteLine($"MAC verification: {(verified ? "SUCCESS" : "FAILURE")}");
        }
    }
    
    /// <summary>
    /// Adds PKCS#7 padding to data to make it block-aligned
    /// </summary>
    static byte[] AddPKCS7Padding(byte[] data, int blockSize)
    {
        int paddingLength = blockSize - (data.Length % blockSize);
        if (paddingLength == 0) paddingLength = blockSize;
        
        byte[] padded = new byte[data.Length + paddingLength];
        Array.Copy(data, padded, data.Length);
        for (int i = data.Length; i < padded.Length; i++)
        {
            padded[i] = (byte)paddingLength;
        }
        return padded;
    }

    /// <summary>
    /// Removes PKCS#7 padding from decrypted data
    /// </summary>
    static byte[] RemovePKCS7Padding(byte[] data)
    {
        int paddingLength = data[data.Length - 1];
        if (paddingLength > data.Length) return data; // Invalid padding
        
        byte[] unpadded = new byte[data.Length - paddingLength];
        Array.Copy(data, unpadded, unpadded.Length);
        return unpadded;
    }

    /// <summary>
    /// Encrypts an image file and returns ciphertext + MAC
    /// MAC is derived from the last ciphertext block
    /// </summary>
    static (byte[] ciphertext, byte[] mac) EncryptImage(string filePath, byte[] key, byte[] iv)
    {
        byte[] imageData = File.ReadAllBytes(filePath);
        byte[] paddedData = AddPKCS7Padding(imageData, 16); // AES block size is 16 bytes
        
        using (Aes aes = Aes.Create())
        {
            aes.Key = key;
            aes.IV = iv;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.None; // We handle padding manually
            
            using (MemoryStream ms = new MemoryStream())
            {
                using (ICryptoTransform encryptor = aes.CreateEncryptor())
                using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                {
                    cs.Write(paddedData, 0, paddedData.Length);
                    cs.FlushFinalBlock();
                }
                
                byte[] ciphertext = ms.ToArray();
                // MAC is the last ciphertext block
                byte[] mac = new byte[aes.BlockSize / 8];
                Array.Copy(ciphertext, ciphertext.Length - mac.Length, mac, 0, mac.Length);
                
                return (ciphertext, mac);
            }
        }
    }
    
    /// <summary>
    /// Decrypts ciphertext using AES-CBC
    /// </summary>
    static byte[] DecryptImage(byte[] ciphertext, byte[] key, byte[] iv)
    {
        using (Aes aes = Aes.Create())
        {
            aes.Key = key;
            aes.IV = iv;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.None; // We handle padding manually
            
            using (MemoryStream ms = new MemoryStream())
            {
                using (ICryptoTransform decryptor = aes.CreateDecryptor())
                using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Write))
                {
                    cs.Write(ciphertext, 0, ciphertext.Length);
                    cs.FlushFinalBlock();
                }
                
                return ms.ToArray();
            }
        }
    }
    
    /// <summary>
    /// Verifies the MAC using constant-time comparison
    /// </summary>
    static bool VerifyMac(byte[] data, byte[] key, byte[] iv, byte[] expectedMac)
    {
        byte[] encrypted = EncryptImageFromBytes(data, key, iv);
        byte[] actualMac = new byte[iv.Length];
        Array.Copy(encrypted, encrypted.Length - iv.Length, actualMac, 0, iv.Length);
        
        // Constant-time comparison to prevent timing attacks
        uint diff = (uint)expectedMac.Length ^ (uint)actualMac.Length;
        for (int i = 0; i < expectedMac.Length && i < actualMac.Length; i++)
        {
            diff |= (uint)(expectedMac[i] ^ actualMac[i]);
        }
        
        return diff == 0;
    }
    
    /// <summary>
    /// Encrypts raw bytes (used for MAC verification)
    /// </summary>
    static byte[] EncryptImageFromBytes(byte[] data, byte[] key, byte[] iv)
    {
        byte[] paddedData = AddPKCS7Padding(data, 16); // Ensure proper padding
        
        using (Aes aes = Aes.Create())
        {
            aes.Key = key;
            aes.IV = iv;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.None;
            
            using (ICryptoTransform encryptor = aes.CreateEncryptor())
            using (MemoryStream ms = new MemoryStream())
            {
                using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                {
                    cs.Write(paddedData, 0, paddedData.Length);
                }
                return ms.ToArray();
            }
        }
    }
}
