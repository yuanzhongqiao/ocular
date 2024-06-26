import "reflect-metadata";
import "core-js/stable"
import "regenerator-runtime/runtime"
import "reflect-metadata";

import express from "express"
import path from "path"
import  {GracefulShutdownServer}  from "./utils/graceful-shutdown-server"
import loaders from "./loaders/index.js";
import Logger from "./loaders/logger"

const app = express()
const rootDirectory = path.resolve(`.`)   
// const host = `localhost`
const port = `9000`

async function start() {
  try {

    await loaders({ directory:rootDirectory, expressApp: app })
    const serverActivity = Logger.activity(`Creating server`)
    const server = GracefulShutdownServer.create(
      app.listen(port,() => {
        Logger.success(serverActivity, `Server is ready on port: ${port}`)
      }).on("error", (err) => {
        console.log("Error starting server", err)
      })
    )


    // Handle graceful shutdown
    const gracefulShutDown = () => {
      server
        .shutdown()
        .then(() => {
          Logger.info("Gracefully stopping the server.")
          process.exit(0)
        })
        .catch((e) => {
          Logger.error("Error received when shutting down the server.", e)
          process.exit(1)
        })
    }
    process.on("SIGTERM", gracefulShutDown)
    process.on("SIGINT", gracefulShutDown)
  } catch (err) {
    Logger.error("Error starting server", err)
    process.exit(1)
  }
}
start()

