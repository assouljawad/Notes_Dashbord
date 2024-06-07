import {SignUpCommand, CognitoIdentityProviderClient, AuthFlowType} from "@aws-sdk/client-cognito-identity-provider";
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const client = new CognitoIdentityProviderClient({region: "us-east-1"});

const sginup = async (email, username, password) => {
    const  command = new SignUpCommand({
      ClientId: clientId,
      Username: username,
      Password: password,
      UserAttributes: [{ Name: "email", Value: email }],
    });
    //return client.send(command);
  };
  const sginin = async (username, password) => {
    const command = new InitiateAuthCommand({
        AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        },
        ClientId: clientId,
      });
      return client.send(command);
  };
  const confirmSignUp = async (username, code) => {
    const command = new ConfirmSignUpCommand({
        ClientId: clientId,
        Username: username,
        ConfirmationCode: code,
      });
      return client.send(command);
  };
export default {sginup, sginin, confirmSignUp};