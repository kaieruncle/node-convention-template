/**
 * 异常处理基类
 */
export class HttpException extends Error {
  constructor(msg = "服务器异常") {
    super();
    this.msg = msg;
    this.errorCode = '-1'
  }
}
/**
 * 未授权
 */
export class AuthorizeException extends HttpException {
  constructor(msg) {
    super();
    this.msg = msg || "授权失效";
    this.errorCode = '000001'
  }
}
/**
 * 客户端参数错误异常类
 */
export class ParameterException extends HttpException {
  constructor(msg) {
    super();
    this.msg = msg || "参数错误";
    this.errorCode = '000002'
  }
}
/**
 * 业务报错
 */
export class SysException extends HttpException {
  constructor(msg) {
    super();
    this.msg = msg || "常规报错";
    this.errorCode = '000003'
  }
}
/**
 * sql错误
 */
export class SqlException extends HttpException {
  constructor(msg) {
    super();
    this.msg = msg || "sql语法错误";
    this.errorCode = '100000'
  }
}
