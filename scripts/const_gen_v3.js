const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./src/wyvern-v3/config.json'))
fs.writeFileSync('./src/utils_v3/deployed.ts', 'export const deployed = ' + JSON.stringify(config.deployed, null, 4).replace(/"/g, '\'') + ';')

var exchangeABI = JSON.parse(fs.readFileSync('./src/wyvern-v3/build/contracts/WyvernExchange.json')).abi
fs.writeFileSync('./src/utils_v3/exchangeABI.ts', 'export const exchangeABI = ' + JSON.stringify(exchangeABI, null, 4).replace(/"/g, '\'') + ';\n// tslint:disable:max-file-line-count')

var proxyRegistryABI = JSON.parse(fs.readFileSync('./src/wyvern-v3/build/contracts/WyvernRegistry.json')).abi
fs.writeFileSync('./src/utils_v3/proxyRegistryABI.ts', 'export const proxyRegistryABI = ' + JSON.stringify(proxyRegistryABI, null, 4).replace(/"/g, '\'') + ';\n// tslint:disable:max-file-line-count')

var atomicizerABI = JSON.parse(fs.readFileSync('./src/wyvern-v3/build/contracts/WyvernAtomicizer.json')).abi
fs.writeFileSync('./src/utils_v3/atomicizerABI.ts', 'export const atomicizerABI = ' + JSON.stringify(atomicizerABI, null, 4).replace(/"/g, '\'') + ';\n// tslint:disable:max-file-line-count')

var staticABI = JSON.parse(fs.readFileSync('./src/wyvern-v3/build/contracts/WyvernStatic.json')).abi
fs.writeFileSync('./src/utils_v3/staticABI.ts', 'export const staticABI = ' + JSON.stringify(staticABI, null, 4).replace(/"/g, '\'') + ';\n// tslint:disable:max-file-line-count')

var staticMarketABI = JSON.parse(fs.readFileSync('./src/wyvern-v3/build/contracts/StaticMarket.json')).abi
fs.writeFileSync('./src/utils_v3/staticMarketABI.ts', 'export const staticMarketABI = ' + JSON.stringify(staticMarketABI, null, 4).replace(/"/g, '\'') + ';\n// tslint:disable:max-file-line-count')

var authenticatedProxyABI = JSON.parse(fs.readFileSync('./src/wyvern-v3/build/contracts/AuthenticatedProxy.json')).abi
fs.writeFileSync('./src/utils_v3/authenticatedProxyABI.ts', 'export const authenticatedProxyABI = ' + JSON.stringify(authenticatedProxyABI, null, 4).replace(/"/g, '\'') + ';\n// tslint:disable:max-file-line-count')
