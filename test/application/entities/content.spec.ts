import { Content } from '../../../src/application/entities/content';

describe('Notification content', () => {
  it('Should be able to create a notification', () => {
    const content = new Content('Essa mensagem deu certo, é valida');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('Should not be able to create a notification with more than 240 characters', () => {
    expect(() => new Content('*'.repeat(241))).toThrow();
  });
});
