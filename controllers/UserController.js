import um from './UserManagement';
import toPage from '../PageName';
//라우터의 로그인 함수
export const signIn = async (req, res) => {
    let paramEmail = req.body.email || req.query.email; //html에서 email 정보를 받는다.
    let paramPassword = req.body.password || req.query.password; //html에서 비밀번호 정보를 받는다.
    if(paramEmail && paramPassword){
        const user = await um.signIn(paramEmail, paramPassword); //디비에서 유저정보를 가져온다.
        if(user){
            const email = user.email;

            console.log(email);
            //로그인된 메시지
            req.session.currentUser = { email };   //세션에 로그인 유저 정보 저장
            res.render(toPage.example, req.session.currentUser);    //로그인되면 로그인된 페이지로 간다.
        }else{
            console.log('222');
            //로그인 안된 메시지
        }
    }
};
//라우터의 회원가입 함수
export const signUp = (req, res) => {
    let paramEmail = req.body.email || req.query.email;
    let paramPassword = req.body.password || req.query.password;
    if(paramEmail && paramPassword) {
        //--아이디,비밀번호 비기능사항(몇자 이상, 특수기호?포함?)추가 예정--
        if(um.signUp(paramEmail, paramPassword)){ //디비에서 회원가입함수를 실행한다.
            res.render(toPage.signIn);  //회원가입이 성공하면 로그인 페이지로 간다.
        }else {
            res.render(toPage.signUp);  //회원가입에 실패하면 다시 회원가입한다.
        }
    }
};
//라우터의 로그아웃함수
export const signOut = (req, res) => {
  if(req.session.currentUser){
      req.session.currentUser = null;
  }
  res.redirect(toPage.home);
};
//라우터의 로그인페이지이동 함수
export const toSignInPage = (req, res) => {
    res.render(toPage.signIn);
};
//라우터의 회원가입페이지이동 함수
export const toSignUpPage = (req, res) => {
    res.render(toPage.signUp);
};