describe('Card', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have one card in English', async () => {
    await expect(element(by.text('Exercise'))).toBeVisible();
  });

  it('after button pressed, should have one card in German', async () => {
    await element(by.text('Click me')).tap();
    await expect(element(by.text('Übung'))).toBeVisible();
  });
});
