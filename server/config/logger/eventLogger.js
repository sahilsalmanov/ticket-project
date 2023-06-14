const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'event-service' },
    transports: [
 
      new winston.transports.File({ filename: 'EventError.log', level: 'error' }),
      new winston.transports.File({ filename: 'EventInfo.log', level: 'info' }),

    ],
  });


  module.exports = {
    logger
  }