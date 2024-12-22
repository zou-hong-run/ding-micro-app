import os from 'os'
// 获取本机的所有网络接口
const networkInterfaces = os.networkInterfaces();

// 遍历网络接口，获取有效的 IPv4 地址
export const getLocalIP = () => {
  for (let interfaceName in networkInterfaces) {
    for (let interfaceDetails of networkInterfaces[interfaceName]) {
      // 检查是否为 IPv4 地址，并且是局域网地址
      if (interfaceDetails.family === 'IPv4' && !interfaceDetails.internal) {
        return interfaceDetails.address;
      }
    }
  }
  return null;  // 如果没有找到合适的 IP 地址
}