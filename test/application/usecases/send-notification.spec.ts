import { SendNotification } from '../../../src/application/usecases/send-notification';

describe('Send notification usecase', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'this is social',
      content: 'this is a content',
      recipientId: '1',
    });

    expect(notification).toBeTruthy();
  });
});
