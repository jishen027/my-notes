# 03 AWS Lambda Functions

## Introduce to Serverless

**AWS serverless platform**

![AWS serverless platform](image-18.png)

**What is Lambda**

- run code without servers
- initiates function for events
- scale automatically
- provide monitoring and logging via `Cloud Watch`

**Event-driven architectures**

An event-driven architecture uses events to initiate actions and communication between decoupled services.

**Producers, routers, comsumers**

![prc](image-19.png)

## How AWS Lambda works

### Invocation models for running Lambda functions

Event sources can invoke a Lambda function in three general patterns.

- Synchronous invocation

  - Synchronous events expect an immediate response from the function invocation.

  - no build-in retries

  ![Synchonous](image-20.png)

  - Sychonours AWS Services

    The following AWS services invoke Lambda synchronously:

        Amazon API Gateway
        Amazon Cognito
        AWS CloudFormation
        Amazon Alexa
        Amazon Lex
        Amazon CloudFront

- Asynchronours invocation

  - Async invocation

    When you invoke a function asynchronously, events are queued and the requestor doesn't wait for the function to complete.

    ![Async invocation](image-21.png)

  - Async AWS service integration

    - Amazon SNS
    - Amazon S3
    - Amazon EventBridge

  - Destinations

    A destination can send records of asynchronous invocations to other services.

- Polling invocation

  - Polling

    This invocation model is designed to integrate with AWS streaming and queuing based services with no code or server management. Lambda will poll (or watch) these services, retrieve any matching events, and invoke your functions

    - Amazon Kinesis
    - Amazon SQS
    - Amazon DyanamoDB Strams

  - Event Srouce Mapping

    The configuration of services as event triggers is known as event source mapping. This process occurs when you configure event sources to launch your Lambda functions and then grant theses sources IAM permissions to access the Lambda function.

    - Amazon DynamoDB
    - Amazon Kinesis
    - Amazon MQ
    - Amazon Managed Streaming for Apache Kafka
    - Self-managed Apache Kafka
    - Amazon SQS

### Invocation model error behavior

| Invocation Model | Error Behavior           |
| ---------------- | ------------------------ |
| Synchronous      | No retries               |
| Asynchronous     | Built in – retries twice |
| Polling          | Depends on event source  |

### Lambda execution environment

Lambda invokes your function in an execution environment, which is a secure and isolated environment.

- Execution environment lifecycle

![lifecycle](image-22.png)

- Init phase

  In this phase, Lambda creates or unfreezes an execution environment with the configured resources, downloads the code for the function and all layers, initializes any extensions, initializes the runtime, and then runs the function’s initialization code (the code outside the main handler).

  Sub-phase:

  1. Extension init - starts all extensions
  2. Runtime init - boostraps the runtime
  3. Function init - run the function's static code

- Invoke pahse

  In this phase, Lambda invokes the function handler.

- Shutdown phase

  If the Lambda function does not receive any invocations for a period of time, this phase initiates. In the Shutdown phase, Lambda shuts down the runtime, alerts the extensions to let them stop cleanly, and then removes the environment.

### Performance optimizetion

- Cold and warm starts

  A cold start occurs when a new execution environment is required to run a Lambda function.

  In a warm start, the Lambda service retains the environment instead of destroying it immediately.

  ![Cold and Warm start](image-23.png)

- Best practice: Minimize cold start times

  For most applications, cold start is not a problem, however, for some synchronous models, thislatency can inhibit optimal performance.

  1. Optimize your function.
  2. Use `Provisioned concurrency`, it can prepare concurrent execution environment before invocations.

- Best practice : Write functions to take advantage of warm starts

  1. Store and reference dependencies locally
  2. Limit re-initialization of variables
  3. Add code to check for and reuse existing connections
  4. Use tmp space as transient cache
  5. Check that background processes have completed.