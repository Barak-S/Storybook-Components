import { Log, setLogColorized, setLogEnabled } from './log';

describe('Log()', () => {
  it('should write console.log()', () => {
    const log = Log('myModule');
    const spy = jest.spyOn(global.console, 'log');

    log.trace('trace');
    expect(spy).toBeCalledWith('[*][myModule]:', 'trace');
    log.debug('debug');
    expect(spy).toBeCalledWith('[-][myModule]:', 'debug');
    log.info('info');
    expect(spy).toBeCalledWith('[+][myModule]:', 'info');
    log.warn('warn');
    expect(spy).toBeCalledWith('[!][myModule]:', 'warn');
    log.err('err');
    expect(spy).toBeCalledWith('[x][myModule]:', 'err');

    spy.mockRestore();
  });

  it('should write colorized logs', () => {
    const log = Log('myModule');
    const spy = jest.spyOn(global.console, 'log');

    setLogColorized(true);

    log.trace('trace');
    expect(spy).toBeCalledWith('%c[*][myModule]:', 'color: #a3a3a3', 'trace');
    log.debug('debug');
    expect(spy).toBeCalledWith('%c[-][myModule]:', 'color: #51555A', 'debug');
    log.info('info');
    expect(spy).toBeCalledWith('%c[+][myModule]:', 'background: #0022F5; color: #FFFFFF', 'info');
    log.warn('warn');
    expect(spy).toBeCalledWith('%c[!][myModule]:', 'background: #FF9501; color: #FFFFFF', 'warn');
    log.err('err');
    expect(spy).toBeCalledWith('%c[x][myModule]:', 'background: #FC2500; color: #FFFFFF', 'err');

    spy.mockRestore();
  });

  it('should not to log', () => {
    const log = Log('myModule');
    const spy = jest.spyOn(global.console, 'log');

    setLogEnabled(false);

    log.info('info');
    expect(spy).not.toBeCalled();

    spy.mockRestore();
  });
});
