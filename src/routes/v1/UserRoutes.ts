import express from 'express';
import { userController} from '../../controllers/UserController';
import { requestValidate } from '../../middleware/requestValidation';
import * as validators from '../../validators'
const router = express.Router();


router.route('/')
.post(validators.createUserRequestRules,requestValidate,userController.createUser)
.get(userController.getAll)

router.route('/:id')
.get(userController.getUserById)
.put(validators.updateUserRequestRule,requestValidate,userController.updateById)
.delete(userController.deleteUserById)

export default router;