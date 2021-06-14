#!/usr/bin/env /Users/birobirobiro/.nvm/versions/node/v16.3.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Toggle Ventilador
// @raycast.mode silent

// Optional parameters:
// @raycast.icon images/eWeLink-logo.png
// @raycast.packageName automation

// Documentation:
// @raycast.description Toggle Ventilador
// @raycast.author Elias Gabriel
// @raycast.authorURL https://github.com/eliasgcf

const auth = require('./env');
const ewelink = require('ewelink-api');

async function run() {
  const connection = new ewelink({
    email: auth.email,
    password: auth.password,
  });

 /* get specific devide info */
//  const device = await connection.getDevice('1000c0d55e');
//  console.log(device);

 /* toggle device */
 await connection.toggleDevice('1000f892cc');

 const status = await connection.getDevicePowerState('1000f892cc');
 status.state === 'on' ? (console.log('Dispositivo Ligado')) : (console.log('Dispositivo Desligado'));
}

run();