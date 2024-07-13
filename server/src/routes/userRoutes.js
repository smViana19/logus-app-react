import userController from '../controllers/UserController'
const { Router } = require('express')


const router = new Router();

router.post("/register", userController.store);
export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT

*/
