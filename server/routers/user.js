let express = require('express')
let router = express.Router()
let user = require('../controllers/user')

router.get('/',user.getUser)
router.post('/',user.addUser)
router.get('/:id',user.findUser)
router.put('/:id',user.editUser)
router.delete('/:id',user.deleteUser)

module.exports = router
