module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '.*\\.(js|ts)x?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [],

  // Doesn't work either with that:
  // transformIgnorePatterns: ['/node_modules/(?!ky-universal/)'],
}
