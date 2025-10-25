// 
import multer from "multer";
import path from "path";

// إعداد مكان التخزين + اسم الملف
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // هيتخزن في مجلد "uploads" داخل المشروع
    callback(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  }
});

// إنشاء instance من multer
const upload = multer({ storage });

export default upload;
