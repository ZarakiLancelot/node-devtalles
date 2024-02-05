import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/callbacks.ts', () => {
  it('should return an error if user ID is not found', (done) => {
    const ID = 10;
    getUserById(ID, (error, user) => {
      expect(error).toBe(`User not found with ID: ${ID}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  it('should return an user if user ID is found', (done) => {
    const ID = 1;
    getUserById(ID, (error, user) => {
      expect(error).toBeUndefined();
      expect(user).toEqual(expect.objectContaining({
        id: 1,
        name: "John Doe"
      }));
      done();
    });
  });
});
