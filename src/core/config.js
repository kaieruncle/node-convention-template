import os from "os";

/**
 * 获取ip地址
 */
function getServeIp() {
  let ipv4s = [];
  let interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach(function (key) {
    interfaces[key].forEach(function (item) {
      if ("IPv4" !== item.family || item.internal !== false) return;
      ipv4s.push(item.address);
    });
  });
  return ipv4s[0];
}

/**
 * 默认环境配置
 */
const baseConf = {
  keys: ["encryption-salt-default"],
  ip: getServeIp()
};
/**
 * 生产环境配置
 */
const development = {
  port: 5000
};
/**
 * 构建环境配置
 */
const production = {
  port: 8112
};

const mergeConfMap = {
  production,
  development,
};

const conf = { ...baseConf, ...mergeConfMap[process.env.NODE_ENV] };
export default conf;
