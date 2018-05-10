import * as mongoose from 'mongoose'
import * as autoIncrement from 'mongoose-auto-increment'
const serverConfig = require('@config/server')

mongoose.connect(serverConfig.databaseConnectionString)
autoIncrement.initialize(mongoose.connection)

// export const AutoIncrementPlugin = require('mongoose-sequence')(mongoose)
export default mongoose