import SystemService from "@/service/system";
import { ParameterException } from "@/core/http-exception";
export default {
  /**
   * 获取文件
   */
  getFile: async (ctx, next) => {
    // 获取文件
    const { file } = ctx.request.files;
    if (!file) throw new ParameterException('获取文件失败')
    const { buffer, originalname } = file[0] || {}
    if (!buffer) throw new ParameterException('获取文件失败')
  }
};
