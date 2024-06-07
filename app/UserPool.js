import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_Fw4vpHK7O",
    ClientId: "2m31ddth57t08vi7e4563jl9lj"
}
export default new CognitoUserPool(poolData)