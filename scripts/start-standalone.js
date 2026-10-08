const fs = require('fs')
const path = require('path')

const serverPath = path.join(process.cwd(), '.next', 'standalone', 'server.js')

if (!fs.existsSync(serverPath)) {
  console.error('Missing `.next/standalone/server.js`.')
  console.error('Run `npm run build` first, then `npm run start`.')
  process.exit(1)
}

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || '5000'
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0'

require(serverPath)
