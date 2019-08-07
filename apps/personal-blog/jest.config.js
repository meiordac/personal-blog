module.exports = {
  name: 'personal-blog',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/personal-blog',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
