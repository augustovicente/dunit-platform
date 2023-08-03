import { Router } from 'express';
import rescue from 'express-rescue';
import authController from '../controllers/auth.controller';
import appController from '../controllers/app.controller';
import authMiddleware from '../middlewares/auth';

const main_router = Router();

main_router.route('/login').post(authController.login);
main_router.route('/signup').post(authController.signup);
main_router.route('/forgot-password').post(authController.forgot_password);
main_router.route('/reset-password').post(authController.reset_password);
// authenticated routes
main_router.route('/fill-information').post(authMiddleware, rescue(authController.fill_information));
main_router.route('/home').get(authMiddleware, rescue(appController.home));

export default main_router;