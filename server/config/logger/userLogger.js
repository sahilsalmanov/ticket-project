const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
 
      new winston.transports.File({ filename: 'UserError.log', level: 'error' }),
      new winston.transports.File({ filename: 'UserInfo.log', level: 'info' }),

    ],
  });


  module.exports = {
    logger
  }