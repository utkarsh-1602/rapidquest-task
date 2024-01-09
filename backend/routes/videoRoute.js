const { addVideo, getAllVideos } = require('../controllers/uploadVideo')
const { videoUpload } = require('../middleware/uploadMiddleware')

const router = require('express').Router()


router.post('/upload', videoUpload.single('video'), addVideo)
    .get('/videos', getAllVideos)

    
module.exports = router