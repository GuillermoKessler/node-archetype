'use strict';

/**
 * Modulo de logging.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

require('winston-daily-rotate-file');
const winston = require('winston');
const mkdirp = require('mkdirp');
const utils = require('../common/utils');
const config = require('../config/config');

const LOG_DIR = config.logging.pathDir;
const FORMAT_TIME = 'DD/MM/YYYY HH:mm:ss:SSS';
const transports = [];

const console = new winston.transports.Console({
  level: 'info',
  colorize: true,
  prettyPrint: true,
  handleExceptions: true,
  timestamp: () => {
    return utils.getBAMoment(FORMAT_TIME);
  }
});

const allFile = new winston.transports.DailyRotateFile({
  name: 'file.info',
  level: 'info',
  filename: `${LOG_DIR}/all`,
  datePattern: '.yyyy-MM-dd.log',
  json: false,
  prettyPrint: true,
  handleExceptions: true,
  timestamp: () => {
    return utils.getBAMoment(FORMAT_TIME);
  }
});


const errorFile = new winston.transports.DailyRotateFile({
  name: 'file.error',
  level: 'error',
  filename: `${LOG_DIR}/errors`,
  datePattern: '.yyyy-MM-dd.log',
  json: false,
  prettyPrint: true,
  handleExceptions: true,
  timestamp: () => {
    return utils.getBAMoment(FORMAT_TIME);
  }
});

if (config.logging.files) {
  mkdirp.sync(LOG_DIR);
  transports.push(console, allFile, errorFile);
} else {
  transports.push(console);
}

const log = new winston.Logger({ transports });

/**
 * Borra el transport para el logging.
 * Se usa para cuando se ejecutan los test de mocha.
 */
function removeTransports() {
  log.remove('console');
  log.remove('file.info');
  log.remove('file.error');
}

module.exports = log;
module.exports.removeTransports = removeTransports;
module.exports.stream = {
  write: (message) => {
    log.info(message);
  }
};
