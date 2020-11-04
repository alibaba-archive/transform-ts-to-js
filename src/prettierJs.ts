import { format } from 'prettier';
import { IFileEntity } from './typing';

const { getPrettierConfig } = require('@iceworks/spec');

function prettierJS(jsFiles: IFileEntity[]): IFileEntity[] {
  const prettierOption = getPrettierConfig('react');
  prettierOption.parser = 'babel';

  return jsFiles.map((entity) => {
    let { data } = entity;
    try {
      data = format(entity.data, prettierOption);
    } catch (e) {
      console.error('error', e);
    }
    return {
      ...entity,
      data,
    };
  });
}

export default prettierJS;
