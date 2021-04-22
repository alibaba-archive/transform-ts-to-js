import { CLIEngine } from 'eslint';
import * as path from 'path';

const { getESLintConfig } = require('@iceworks/spec');

const engine = new CLIEngine({
  useEslintrc: false,
  fix: true,
  baseConfig: getESLintConfig('react-ts'),
  extensions: ['.jsx', '.js'],
  cwd: path.dirname(require.resolve('@iceworks/spec'))
});

function eslintJS(outDir: string) {
  const report = engine.executeOnFiles([outDir]);
  CLIEngine.outputFixes(report);
}

export default eslintJS;
