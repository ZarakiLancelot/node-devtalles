import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.ts', () => {
  it('should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, ');
  });

  it('should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toContain('{{orderId}}');
  })
});
