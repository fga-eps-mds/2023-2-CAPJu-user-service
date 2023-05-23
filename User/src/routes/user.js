import express from 'express';
import { UserController } from '../controllers/user.js';
const UserRoutes = express.Router();
const userController = new UserController();

UserRoutes.get('/allUser', userController.getAllUsers);
UserRoutes.get('/cpf/:cpf', userController.getUserByCpf);
UserRoutes.post('/login', userController.loginUser);
UserRoutes.post('/newUser', userController.store);
UserRoutes.post('/updateUser/:cpf', userController.updateUserEmail);
UserRoutes.post('/updateUserRole', userController.updateUserRole);
UserRoutes.post('/acceptRequest/:cpf', userController.acceptRequest);
UserRoutes.post('/updateUserPassword/:cpf', userController.updateUserPassword);
UserRoutes.delete('/deleteUser/:cpf', userController.deleteByCpf);
UserRoutes.delete('/deleteRequest/:cpf', userController.deleteRequest);

export default UserRoutes;