const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'category-service' },
    transports: [
 
      new winston.transports.File({ filename: 'CategoryError.log', level: 'error' }),
      new winston.transports.File({ filename: 'CategoryInfo.log', level: 'info' }),

    ],
  });


  module.exports = {
    logger
  }