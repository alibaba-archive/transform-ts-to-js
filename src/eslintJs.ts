import { CLIEngine } from 'eslint';
import { IFileEntity } from './typing';

const { getESLintConfig } = require('@iceworks/spec');

const engine = new CLIEngine({
  useEslintrc: false,
  fix: true,
  baseConfig: getESLintConfig('react-ts'),
});

export const lintAndFix: (content: string, filename?: string) => string = (content, filename) => {
  const report = engine.executeOnText(content, filename);

  if (report.results[0].output) {
    return report.results[0].output;
  }
  return content;
};

function eslintJS(jsFiles: IFileEntity[]) {
  const lintFiles: IFileEntity[] = jsFiles.map((entity: IFileEntity) => {
    let output: string = entity.data;
    try {
      output = lintAndFix(entity.data);
    } catch (e) {
      console.error(e);
    }
    return {
      ...entity,
      data: output,
    };
  });

  return lintFiles;
}

export default eslintJS;
