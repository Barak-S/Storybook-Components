import { buildCloudinaryUrl, parseCloudinaryUrl } from './cloudinary';

describe('parseCloudinaryUrl()', () => {
  test('should return correct value', () => {
    expect(
      parseCloudinaryUrl('https://res.cloudinary.com/dkvjgkmhs/image/upload/v1619683361/profile/og56pycelpeaesyjcx2j.jpg'),
    ).toEqual({
      cloudName: 'dkvjgkmhs',
      extension: 'jpg',
      publicId: 'og56pycelpeaesyjcx2j',
      path: 'profile',
      version: 'v1619683361',
    });
    expect(
      parseCloudinaryUrl('https://res.cloudinary.com/dkvjgkmhs/image/upload/v1619683361/profile/some/og56pycelpeaesyjcx2j.jpg'),
    ).toEqual({
      cloudName: 'dkvjgkmhs',
      extension: 'jpg',
      publicId: 'og56pycelpeaesyjcx2j',
      path: 'profile/some',
      version: 'v1619683361',
    });
  });
});

describe('buildCloudinaryUrl()', () => {
  test('should return correct value', () => {
    expect(
      buildCloudinaryUrl({
        cloudName: 'dkvjgkmhs',
        extension: 'jpg',
        publicId: 'og56pycelpeaesyjcx2j',
        path: 'profile/some',
        version: 'v1619683361',
      }),
    ).toBe('https://res.cloudinary.com/dkvjgkmhs/image/upload/v1619683361/profile/some/og56pycelpeaesyjcx2j.jpg');
  });
});
