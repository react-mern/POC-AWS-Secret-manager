# AWS-Secret-Manager-POC
- AWS Seceret Manager is a handy tool when it comes to seceret management. You can use it to store API secret keys or any other secret for that matter.
- You can store the secret on the secret manager as a plain text and give the seceret name. (You'll need to use this secret to access the secret in your code.
- In `getSeceret.js` add the Secret Name to `secret_name` variable.
- Make sure your Secret is in same region as in `getSeceret.js`
- On Running the code aws-sdk comes in handy and `GetSecretValueCommand` function fetches the Secret stored on AWS Secret Manager for us.
- Same principle can be applied when You need to fetch some secret for APIs
