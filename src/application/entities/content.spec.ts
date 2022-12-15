import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma nova notificação de amizade');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with less than 5 characteres', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create a notification content with or more 240 characteres', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
