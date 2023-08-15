const tencentcloud = require("tencentcloud-sdk-nodejs-ocr");
const OcrClient = tencentcloud.ocr.v20181119.Client;
export default new OcrClient({
    credential: {
        secretId: "AKIDc3kOuJo9HAoPywqa8dzAEBwgFhzoUwGW",
        secretKey: "87rZ1QLBvhP5oOn1Om273mNukTyIRany",
    },
    region: "ap-beijing",
    profile: {
        httpProfile: {
            endpoint: "ocr.tencentcloudapi.com",
        }
    }
});
