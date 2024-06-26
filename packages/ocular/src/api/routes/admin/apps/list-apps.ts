import { AppService } from "../../../../services"

export default async (req, res) => {
  const appService: AppService = req.scope.resolve("appService")
  const data = await appService.list({})
  res.status(200).json({ apps: data })
}