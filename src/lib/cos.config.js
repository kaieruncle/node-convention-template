import COS from "cos-nodejs-sdk-v5";
export default new COS({
    SecretId: "AKIDc3kOuJo9HAoPywqa8dzAEBwgFhzoUwGW", // 推荐使用环境变量获取；用户的 SecretId，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
    SecretKey: "87rZ1QLBvhP5oOn1Om273mNukTyIRany" // 推荐使用环境变量获取；用户的 SecretKey，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
});
