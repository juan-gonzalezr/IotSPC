const {Router}=require('express');
const router=Router();

const {getInfos,createInfo,getInfo,updateInfo,deleteInfo}=require('../controllers/info.controllers');

router.route('/')
    .get(getInfos)
    .post(createInfo)


router.route('/:id')
    .get(getInfo)
    .put(updateInfo)
    .delete(deleteInfo)


module.exports = router;