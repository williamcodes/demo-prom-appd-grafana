require("appdynamics").profile({
  controllerHostName: process.env.APPDYNAMICS_CONTROLLER_HOST_NAME,
  controllerPort: process.env.APPDYNAMICS_CONTROLLER_PORT,

  // If SSL, be sure to enable the next line
  controllerSslEnabled: process.env.APPDYNAMICS_CONTROLLER_SSL_ENABLED,
  accountName: process.env.APPDYNAMICS_ACCOUNT_NAME,
  accountAccessKey: process.env.APPDYNAMICS_ACCOUNT_ACCESS_KEY,
  applicationName: process.env.APPDYNAMICS_APPLICATION_NAME,
  tierName: process.env.APPDYNAMICS_TIER_NAME,
  nodeName: process.env.APPDYNAMICS_NODE_NAME // The controller will automatically append the node name with a unique number
});

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log('Hello World!'); res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
