import { CLIEngine } from 'eslint';

const { getESLintConfig } = require('@iceworks/spec');

const engine = new CLIEngine({
  useEslintrc: false,
  fix: true,
  baseConfig: getESLintConfig('react-ts'),
  extensions: ['.jsx', '.js']
});

function eslintJS(outDir: string) {
  const report = engine.executeOnFiles([outDir]);
  CLIEngine.outputFixes(report);
}

export default eslintJS;
