import { default as authenticateAdmin } from "./authenticate-admin"
import { default as authenticate} from "./authenticate"
import { default as wrap } from "./await-middleware"
import { default as registeredLoggedinUser } from "./logged-in-user"


export { transformQuery } from "./transform-query"

export default {
  authenticateAdmin,
  authenticate,
  registeredLoggedinUser,
  wrap
}