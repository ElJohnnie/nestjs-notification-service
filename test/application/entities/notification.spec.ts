import { Content } from '../../../src/application/entities/content';
import { Notification } from '../../../src/application/entities/notification';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação'),
      category: 'Teste',
      recipientId: 'Any_Id',
    });

    expect(notification).toBeTruthy();
  });
});
