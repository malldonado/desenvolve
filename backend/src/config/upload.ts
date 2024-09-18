import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

const storage = multer.diskStorage({
  destination: uploadFolder,
  filename: (request, file, callback) => {
    const fileHash = crypto.randomBytes(10).toString('hex');
    const filename = `${fileHash}-${file.originalname}`;
    callback(null, filename);
  },
});

export default {
  directory: uploadFolder,
  storage,
};
