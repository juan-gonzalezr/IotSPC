const {Router}=require('express');
const router=Router();
const {getUsers,createUsers,getUser,updateUsers,deleteUsers}=require('../controllers/users.controllers');
router.route('/')
    .get(getUsers)
    .post(createUsers)


router.route('/:id')
    .get(getUser)
    .put(updateUsers)
    .delete(deleteUsers)
module.exports = router;