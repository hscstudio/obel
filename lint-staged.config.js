module.exports = {
  linters: {
    '**/*.+(js|json|less|css|ts|tsx|md)': [
      'prettier',
      'yarn test --coverage --findRelatedTests',
      'yarn build -s',
      'git add',
    ],
  },
}
