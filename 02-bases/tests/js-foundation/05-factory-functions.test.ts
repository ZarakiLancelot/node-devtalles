import { buildPersonOptions } from '../../src/js-foundation/05-factory-functions';

describe('js-foundation/05-factory-functions', () => {
  const getUUID = () => '1234567890';
  const getAge = () => 37;

  it('buildPersonOptions should return a function', () => {
    const person = buildPersonOptions({ getUUID, getAge });
    expect(person).toBeInstanceOf(Function);
  });

  it('should return a person', () => {
    const buildPerson = buildPersonOptions({ getUUID, getAge });
    const sandy = buildPerson({ name: 'Sandy', birthdate: '1987-07-31' });
    
    expect(sandy).toEqual(expect.objectContaining({
      id: '1234567890',
      name: 'Sandy',
      birthdate: '1987-07-31',
      age: 37
    }));
  });
});
