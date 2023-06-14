const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'seat-service' },
    transports: [
 
      new winston.transports.File({ filename: 'SeatError.log', level: 'error' }),
      new winston.transports.File({ filename: 'SeatInfo.log', level: 'info' }),

    ],
  });


  module.exports = {
    logger
  }