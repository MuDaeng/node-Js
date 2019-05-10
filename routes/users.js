import routes from '../RoutesName';
import { signIn, signUp, toSignUpPage } from '../controllers/UserController';
import express from 'express';
const router = express.Router();
/* GET users listing. */
// router.use(routes.base, function(req, res, next) {
//   res.send('respond with a resource');
//   console.log(routes.signIn);
//   console.log(signIn);
// });
//로그인 라우터 미들웨어
router.post(routes.signIn, signIn);
//회원가입페이지 이동 라우터
router.post(routes.signUp_form, toSignUpPage);
//회원가입 라우터
router.post(routes.signUp, signUp);

module.exports = router;
