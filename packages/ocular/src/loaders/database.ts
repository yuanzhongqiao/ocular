/* eslint-disable @typescript-eslint/no-explicit-any */
import { AwilixContainer } from "awilix"
import {
  DataSource,
  DataSourceOptions
} from "typeorm"
import { ConfigModule } from "../types/config-module"
import "../utils/naming-strategy.js"
import { handlePostgresDatabaseError } from "../utils/handle-postgres-database-error.js"

type Options = {
  container: AwilixContainer
  configModule: ConfigModule
  customOptions?: {
    migrations: DataSourceOptions["migrations"]
    logging: DataSourceOptions["logging"]
    generateMigration: boolean
  }
}

export let dataSource: DataSource

export default async ({
  container,
  configModule,
  customOptions,
}: Options): Promise<DataSource> => {
  const entities = container.resolve("db_entities")

  const connectionString = configModule.projectConfig.database_url
  const database = configModule.projectConfig.database_database
  const extra: any = configModule.projectConfig.database_extra || {}
  const schema = configModule.projectConfig.database_schema || "public"

  dataSource = new DataSource({
    type: "postgres",
    url: connectionString,
    database: database,
    extra,
    schema,
    entities,
    migrations: customOptions?.migrations,
    logging:
      customOptions?.logging ??
      (configModule.projectConfig.database_logging || false),
  } as DataSourceOptions)


  // If migrations are not included in the config, we assume you are attempting to start the server
  // Therefore, throw if the database is not migrated
  if (!customOptions?.generateMigration) {
    await dataSource.initialize().catch(handlePostgresDatabaseError)
    await dataSource
      .query(`select * from migrations`)
      .catch(handlePostgresDatabaseError)
  }
  return dataSource
}