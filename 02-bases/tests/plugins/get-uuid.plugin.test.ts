import { getUUID } from '../../src/plugins/get-uuid.plugin';

describe('plugins/get-uuid.plugin.ts', () => {
  it('getUUID() should return a string', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });
});
