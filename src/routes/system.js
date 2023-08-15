import SystemController from '@/controller/system';
import multer from "@koa/multer";
const storage = multer.memoryStorage();
const upLoadMiddle = multer({
    fileFilter(req, file, callback) {
        // 解决中文名乱码的问题 latin1 是一种编码格式
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
        callback(null, true);
    },
    storage
});
export default r => {
    r.post('/ocr', upLoadMiddle.fields([{ name: "file", maxCount: 1 }]), SystemController.getFile);
}