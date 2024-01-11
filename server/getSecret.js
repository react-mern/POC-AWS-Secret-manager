const {
    SecretsManagerClient,
    GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const secret_name = "Test";

const client = new SecretsManagerClient({
    region: "us-east-1",
});

const getSecret = async () => {
    let response;

    try {
        response = await client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
            })
        );
    } catch (error) {
        throw error;
    }

    const secret = response.SecretString;
    return secret
}

module.exports = { getSecret }