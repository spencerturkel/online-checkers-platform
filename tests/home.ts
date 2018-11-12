import { Selector } from 'testcafe';

const host = process.env.HOST;

if (!host) {
  throw new Error('HOST environment variable not set');
}

fixture('Home').page(host + '/');

test('Home page renders', async t => {
  await t.expect(Selector('html').innerText).contains('Online');
});
