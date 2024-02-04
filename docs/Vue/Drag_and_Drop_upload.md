```html
<template>
  <div class="modal">
    <!-- this modal for add images to gallery -->
    <h3>{{gallery.name}}</h3>
    <div class="drop-zone" @drop="handleDrop" @dragover.prevent @dragenter.prevent @dragleave.prevent>
      <h2>Please drop you images here</h2>
    </div>

    <p>images to upload</p>
    <div class="image-upload">
      <div v-for="image in images" :key="image.name">
        <img :src="image.url" :alt="image.name">
      </div>
    </div>
    <div class="footer">
      <button type="submit" class="submit-btn" @click="upload">Upload</button>
      <button class="clean-btn" type="button" @click="clean">clean images</button>
    </div>
    <h5>uploaded images</h5>
    <div class="uploaded-images">
      <div v-for="galleryImage in galleryImages" :key="galleryImage.id">
        <div :class="[isSelectedUploadedGalleryImage(galleryImage)? 'selected' : '']" @click="handleSelectUploadedGalleryImage(galleryImage)">
          <img :src="baseUrls + galleryImage.image.path" :alt="galleryImage.image.name">
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="close-btn" type="button" @click="cancel">Close</button>
      <button class="delete-btn" @click="deleteSelectedUploadedGalleryImages">Delete</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { axiosCall } from '@/hooks/axios';
export default {
  name: 'AddImageModal',
  props: {
    gallery: { required: true },
  },
  setup(props, context) {
    const images = ref([]);
    const baseUrls = ref(process.env.VUE_APP_IMAGE_BASE_PATH);

    // selected uploaded gallery images
    const selectedUploadedGleryImages = ref([]);

    // select uploaded gallery image
    function handleSelectUploadedGalleryImage(image) {
      if (selectedUploadedGleryImages.value.includes(image)) {
        selectedUploadedGleryImages.value = selectedUploadedGleryImages.value.filter((item) => item !== image);
      } else {
        selectedUploadedGleryImages.value.push(image);
      }
    }

    // if gallery image is selected return true
    function isSelectedUploadedGalleryImage(image) {
      return selectedUploadedGleryImages.value.includes(image);
    }

    // get gallery images from props gallery
    const galleryImages = ref(props.gallery.gallery_images);

    function cancel() {
      context.emit('close');
    };

    // get gallery by id and asign gallery-images to galleryImages
    function getGallery() {
      axiosCall.get(`/gallery/${props.galleryId}`)
        .then((response) => {
          // galleryImages.value = response.data.images;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // delete selected uploaded gallery images from backend
    function deleteSelectedUploadedGalleryImages() {
      // if no images selected
      if (selectedUploadedGleryImages.value.length === 0) {
        alert('No images selected.');
        return;
      }

      axiosCall.delete(`/gallery/${props.gallery.id}/deleteMultipleImages`, { data: { galleryImages: selectedUploadedGleryImages.value } })
        .then((response) => {
          console.log(response);
          galleryImages.value = response.data.data.gallery_images;
          selectedUploadedGleryImages.value = [];
          context.emit('uploaded');
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // upload images to gallery
    const upload = async () => {
      try {
        console.log(images.value);
        if (images.value.length === 0) {
          alert('No images to upload.');
        }

        // upload multiple base64 images
        axiosCall
          .post(
            `/gallery/${props.gallery.id}/uploadMultipleImages`,
            { images: images.value, gallery_id: props.gallery.id},
          )
          .then((response) => {
            console.log(response);
            images.value = [];
            galleryImages.value = response.data.data.gallery_images;
            context.emit('uploaded');
          })
          .catch((error) => {
            console.log(error);
          });
        
      } catch (error) {
        console.error(error);
        // Show error message to the user
        alert(error.message);
      }
    };

    const clean = () => {
      images.value = [];
    };

    const handleDrop = async (event) => {
      try {
        event.preventDefault();
        event.stopPropagation();

        const files = event.dataTransfer.files;
        if (!files) {
          throw new Error('No files were dropped.');
        }


        for (let i = 0; i < files.length; i++) {
          // check if file is an image
          if (!files[i].type.match('image.*')) {
            throw new Error(`File ${files[i].name} is not an image.`);
          }
          // you can use the file reader to read the file as a data url
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            images.value.push({
              name: files[i].name,
              url: e.target.result
            });
          };
          fileReader.onerror = (e) => {
            console.log(e);
            throw new Error(`An error occurred while reading file ${files[i].name}.`);
          };
          fileReader.readAsDataURL(files[i]);
        }
      } catch (error) {
        console.error(error);
        // Show error message to the user
        alert(error.message);
      }
    }

    return {
      cancel,
      getGallery,
      images,
      handleDrop,
      clean,
      upload,
      galleryImages,
      baseUrls,
      selectedUploadedGleryImages,
      handleSelectUploadedGalleryImage,
      isSelectedUploadedGalleryImage,
      deleteSelectedUploadedGalleryImages
    }
  }
}
</script>

```