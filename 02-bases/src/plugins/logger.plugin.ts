import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

export const loggerPlugin = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

loggerPlugin.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

export const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      loggerPlugin.log('info', {
        level: 'info',
        message,
        service,
      });
    },
    error: (message: string) => {
      loggerPlugin.error('error', {
        level: 'error',
        message,
        service,
      });
    },
  }
}
