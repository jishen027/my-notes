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

## AWS Lambda Function Permissions

With Lambda functions, there are two sides that define the necessary scope of permissions – permission to invoke the function, and permission of the Lambda function itself to act upon other services.

![Lambda Function Permissions](image-24.png)

![IAM Execution Roles](image-25.png)

### Execution role

The execution role gives your function permissions to interact with other services.

Example : Execution role definitions

- IAM policy

```json
"Version": "2012-10-17",
  "Statement" : [
    {
      "Sid": "Allow PutItem in table/test",
      "Effect": "Allow",
      "Action": "dynamodb:PutItem",
      "Resource": "arn:aws:dynamodb:eu-west-2:###:table/test"
    }
  ]
```

- Trust policy

A trust policy defines what actions your role can assume. The trust policy allows Lambda to use the role's permissions by giving the service principal lambda.amazonaws.com permission to call the AWS Security Token Service (AWS STS) AssumeRole action.

```json
{
  "Effect": "Allow",
  "Action": "sts:AssumeRole",
  "Principal": {
    "Service": "lambda.amazonaws.com"
  }
}
```

### Resource-based policy

A resource policy (also called a function policy) tells the Lambda service which principals have permission to invoke the Lambda function. An AWS principal may be a user, role, another AWS service, or another AWS account.

### Policy comparison

- Resource-based policy

  Lambda resource-based policy

  - Associated with a "push" event srouce such as Amazon API gateway
  - Created when you add a trigger to a Lambda function
  - Allows the event source to take the lambda:invokeFunction action

- Execution role

  IAM execution role

  - Role selected or created when you create a lambda function
  - IAM Policy includes actions you can take with the resource
  - Trust policy that allows Lambda to AssumeRole
  - Creator must have permission for iam:PassRole

- Example resource policy

```json
"Version" : "2012-10-17",
"Id" : "test-policy",
"Statement" : [
  {
    "Sid": "lambdaInvoke",
    "Effect": "Allow",
    "Principal": {
      "Service": "s3.amazonaws.com"
    },
    "Action": "lambda:InvokeFunction",
    "Resource": "arn:aws:lambda:eu-west-2:###:function:test",
    "Condition": {
      "ArnLike": {
        "AWS:SourceArn": "arn:aws:s3:::test-bucket"
      }
    }
  }
]
```

### Accessing resources in a VPC

Enabling your Lambda function to access resources inside your virtual private cloud (VPC) requires additional VPC-specific configuration information, such as VPC `subnet IDs` and `security group IDs`.

- Lambda and AWS PrivateLink

  To establish a private connection between your VPC and Lambda, create an interface VPC endpoint.

## Authoring AWS Lambda functions

- learn best practice for writing Lambda function code.

### Use your own code

- Supported languages

  Node.js, C#...

- Start with the handler method

  The Lambda function handler is the method in your function code that processes events.

  The handler method takes two objects

  - Event Ojbect

    - required
    - when lambda invoked, `event object` will be provide to handler
    - event object is different
    - inlcude metadata your lambda function needs

  - Context Object (optional)

    - allow you function code to interact with the lambda execution environment.
    - The content and structure based on language runtime, minimum element contains:
      - `AWS RequestID`
      - `Runtime`
      - `Logging`

- Design best practices

  1. Separate business logic

  Separate your core business logic from the handler event.
  ![separate business logic](image-26.png)

  2. Write modular functions

  Module functions will reduce the amount of time that it takes for your deployment package to be downloaded and unpacked before invocation.

  ![module functions](image-27.png)

  3. Treat functions as stateless

  No information about state should be saved within the context of the function itself.

  Consider one of the following options for storing state data:

  - DynamoDB
  - ElasticCache
  - S3

  4. Only include what you need

  Minimize both your deployment package dependencies and its size.
  This can have a significant impact on the startup time for your function.

- Best parctices for writing code

  1. Include logging statements

     Lambda functions can and should include logging statements, which are written to CloudWatch.

     example

     ```python
     import os
     import logging
     logger = logging,getLogger()
     logger.setLevel(logging.INFO)

     def lambda_handler(event, context):
       logger.info('## ENVIRONMENT VARIABLES')
       logger.info(os.environ)
       logger.info(event)
     ```

  2. Use return coding

     Functions must give Lambda information about the results of their actions.

     ```js
     exports.handler = async function (event, context) {
       console.log("EVENT: \n" + JSON.stringify(event, null, 2));
       return context.logStreamName;
     };
     ```

  3. Provide environment variables

     - Take advantage of environment variables for operational parameters.

     - You can use these parameters to pass updated configuration settings without changes to the code itself.

     - You can also use environment variables to store sensitive information required by the function.

  4. Add secret and refernce data

     AWS Secrets Manager helps you organize and manage important configuration data such as credentials, passwords, and license keys.

  5. Avoid recursive code

     Avoid a situation in which a function calls itself.

     Recursive code could lead to uncontrolled scaling of invocations that would make you lose control of your concurrency.

  6. Gather metrics with Amazon `CloudWatch`

     The CloudWatch embedded metric format (EMF) is a JSON specification used to instruct CloudWatch Logs to automatically extract metric values embedded in structured log events.

  7. Reuse execution context

     1. Store dependencies locally.

     2. Limit re-initialization of variables.

     3. Reuse existing connections.

     4. Use tmp space as transient cache.

     5. Check that background processes have completed.

### Building Lambda functions

- Lambda console editor

  You can author functions within the Lambda console, with an IDE toolkit, using command line tools, or using the AWS SDKs.

- Deployment packages

  Your Lambda function's code consists of scripts or compiled programs and their dependencies.

- Automate using tools

  Serverless applications built using Lambda are a combination of Lambda functions, event sources, and other resources defined using the AWS Serverless Application Model (AWS SAM).

### What is SAM

AWS SAM is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. With just a few lines per resource, you can define the application you want and model it using YAML. You provide AWS SAM with simplified instructions for your environment and during deployment AWS SAM transforms and expands the AWS SAM syntax into AWS CloudFormation syntax (a fully detailed CloudFormation template).

![sam](image-28.png)

- SAM prebuild policies
  AWS SAM provides a number of predefined, commonly used templates that you can use to build for least privilege security access.

- SAM CLI can test and deploy the lambda function

  1. Invoke functions and run automated tests locally.
  2. Generate sample event srouce payloads.
  3. Run api gateway locally.
  4. Debug code.
  5. Review Lambda function logs.
  6. Validate AWS SAM templates.

  ![SAM CLI](image-29.png)

- AWS SAM CLI

  1. init

     Initializes a serverless application.

  2. local
     Runs application locally

  3. validate

     Validates an AWS SAM template.

  4. deploy

     Deploys an sam application

  5. build

     Builds a serverless application and prepares it for subsequent steps in your workflow.

- Serverless CI/CD pipeline

  - CodeBuild - Automate the process of packaging code and run tests
  - CodeDeploy - Use Version management options to ensure safe deployments.

  ![CI/CD Serverless](image-30.png)
