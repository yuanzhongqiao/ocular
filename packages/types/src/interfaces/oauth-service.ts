import { TransactionBaseService } from "./transaction-base-service"

/**
 * Interface for file connectors
 * @interface
 */
class BaseOauthService extends TransactionBaseService {
  static _isOauthService = true

  static isOauthService(obj) {
    return obj?.constructor?._isOauthService
  }

  generateToken(code: string,installation_id?: string) {
    throw Error("generateToken must be overridden by the child class")
  }

  refreshToken(refresh_token: string) {
    throw Error("refreshToken must be overridden by the child class")
  }

  destroyToken() {
    throw Error("destroyToken must be overridden by the child class")
  }
}

export default BaseOauthService