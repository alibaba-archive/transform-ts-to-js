const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    '@typescript-eslint/no-require-imports': 0
  }
});
