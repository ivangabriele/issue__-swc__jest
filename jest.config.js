module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '.*\\.(j|t)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [],

  // Doesn't work either with that:
  // transformIgnorePatterns: ['/node_modules/(?!ky-universal/)'],
}
