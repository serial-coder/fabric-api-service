const ChaincodeService = require('../helper/chaincode-service')
const logger = require('log4js').getLogger('chaincode-example02-service')

class ChaincodeExample02Service extends ChaincodeService {

  async move(payload) {
    // const params = [JSON.stringify(payload)]
    // logger.info(`params ${params}`)
    // return await this.invoke('move', params)

    logger.info(`payload ${payload}`)
    return await this.invoke('move', payload)
  }

  async delete(payload) {
    // const params = [JSON.stringify(payload)]
    // logger.info(`params ${params}`)
    // return await this.invoke('delete', params)

    logger.info(`payload ${payload}`)
    return await this.invoke('delete', payload)
  }

  async query_(payload) {
    // const params = [JSON.stringify(payload)]
    // logger.info(`params ${params}`)
    // return await this.query('query', params)

    logger.info(`payload ${payload}`)
    return await this.query('query', payload)
  }
}

module.exports = ChaincodeExample02Service