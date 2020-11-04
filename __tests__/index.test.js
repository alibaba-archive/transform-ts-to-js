const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const transformTsToJs = require('../lib/index');

const cwd = path.resolve(__dirname, 'suite');

describe('transformTsToJs', () => {
  const files = glob.sync('**/*.@(ts|tsx)', {
    cwd,
  });

  it('basic', () => {
    const fileList = transformTsToJs(files, {
      cwd,
    });

    expect(fileList.length).toBe(3);
  });

  describe('write', () => {
    const tmpSourcePath = path.resolve(__dirname, 'tmpSrc');
    const tmpTargetPath = path.resolve(__dirname, 'tmpTgt');

    beforeEach(() => {
      fs.removeSync(tmpSourcePath);
      fs.removeSync(tmpTargetPath);

      fs.copySync(cwd, tmpSourcePath);
    });

    afterEach(() => {
      fs.removeSync(tmpSourcePath);
      fs.removeSync(tmpTargetPath);
    });

    it('different folder', () => {
      transformTsToJs(files, {
        cwd: tmpSourcePath,
        outDir: tmpTargetPath,
        action: 'write',
      });

      expect(
        glob.sync('**/*.@(ts|tsx|js|jsx)', {
          cwd: tmpTargetPath,
        }).length,
      ).toBe(3);
    });

    it('same folder', () => {
      transformTsToJs(files, {
        cwd: tmpSourcePath,
        action: 'write',
      });

      expect(
        glob.sync('**/*.@(ts|tsx|js|jsx)', {
          cwd: tmpSourcePath,
        }).length,
      ).toBe(8);
    });

    it('overwrite folder', () => {
      transformTsToJs(files, {
        cwd: tmpSourcePath,
        action: 'overwrite',
      });

      expect(
        glob.sync('**/*.@(ts|tsx|js|jsx)', {
          cwd: tmpSourcePath,
        }).length,
      ).toBe(5);
    });
  });
});
