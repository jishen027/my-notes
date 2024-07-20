# Task-based asynchronous programming

## Create and running tasks explicitly

### Creating a task

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class Lambda
{
   public static void Main()
   {
      Thread.CurrentThread.Name = "Main";

      // Create a task and supply a user delegate by using a lambda expression.
      Task taskA = new Task( () => Console.WriteLine("Hello from taskA."));
      // Start the task.
      taskA.Start();

      // Output a message from the calling thread.
      Console.WriteLine("Hello from thread '{0}'.",
                        Thread.CurrentThread.Name);

      // Wait for the task to finish.
      taskA.Wait();
   }
}
// The example displays output as follows:
//       Hello from thread 'Main'.
//       Hello from taskA.
// or
//       Hello from taskA.
//       Hello from thread 'Main'.
```

### Use Task.Run to execute a task

```csharp
Task taskA = Task.Run( () => Console.WriteLine("Hello from taskA."));
taskA.Wait();
```

### Use Task.Factory.StartNew to execute a task

- Task.Factory.StartNew is a more flexible way to create and start a task. It allows you to specify creation options and a task scheduler.
- Task.Factory.StartNew is useful when you want to create a task and start it in one operation.

```csharp

// create a task array
Task[] taskArry = new Task[10];

// create and start a task
for (int i = 0; i < 10; i++)
{
   // Use the Task.Factory.StartNew method to run a task. the lambda expression is used to specify the code to run in the task.
   // the lambda expression creates a new CustomData object and assigns the value of the loop counter to the Name property.
   taskArry[i] = Task.Factory.StartNew( (Object obj) =>
    {
        CustomData data = obj as CustomData;
        if (data == null)
            return;

        data.ThreadNum = Thread.CurrentThread.ManagedThreadId;
    },
    new CustomData() { Name = i, CreationTime = DateTime.Now.Ticks });
}

// wait for all tasks to complete
Task.WaitAll(taskArry);
```
