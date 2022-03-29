import {arg, mutationField, nonNull, stringArg} from 'nexus';

import {nanoid} from 'nanoid';
import {uploadFileToAzureBlobFromStream} from '../../utils/azure';

export const singleUpload = mutationField('singleUpload', {
  type: nonNull('String'),
  args: {
    file: nonNull(arg({type: 'Upload'})),
    dir: stringArg(),
  },
  resolve: async (_parent, {file, dir}) => {
    const {createReadStream} = await file;
    const stream = createReadStream();

    return uploadFileToAzureBlobFromStream(
      stream,
      nanoid(),
      dir ?? '',
      process.env.NODE_ENV === 'production' ? 'hackatalk' : 'hackatalkdev',
    );
  },
});
