import { buildLogger, loggerPlugin } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {
  const logger = buildLogger('test');
  const message = 'Hola Mundo';
  const error = 'Error';
  const service = 'Test Service';

  it('buildLogger should be a function', () => {
    expect(buildLogger).toBeInstanceOf(Function);
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });

  it('logger.log should log a message', () => {
    const winstonLogger = jest.spyOn(loggerPlugin, 'log');

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLogger).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      }),
    );
  });

  it('logger.error should log an error', () => {
    const winstonLogger = jest.spyOn(loggerPlugin, 'error');

    const logger = buildLogger(service);
    logger.error(error);

    expect(winstonLogger).toHaveBeenCalledWith(
      'error',
      expect.objectContaining({
        level: 'error',
        message: error,
        service,
      }),
    );
  });
});
