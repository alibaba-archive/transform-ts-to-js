import { IFileEntity, IBabelOption, IOption } from './typing';
declare function sylvanas(files: string[], option: IOption): IFileEntity[];
declare namespace sylvanas {
    var parseText: (text: string, option?: IBabelOption) => string;
}
export = sylvanas;
