import multer from 'multer'
// const upload = multer({dest:'uploads'});
// export default upload;

// const multer = require('multer');
const storage = multer.diskStorage({
  destination: './tmp/uploads', // Use /tmp or another writable directory
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

export default upload
