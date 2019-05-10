import EncodingPw from "./EncryptionPassword";
import User from "../models/User";
//디비에 대한 로그인 기능
const signIn = async (email, pw) => {
 const encodedPw = await EncodingPw(pw);
 console.log(encodedPw);
 try{
  const user = await User.find({ email }); //디비에서 이름에 맞는 유저정보를 가져옴
  if(encodedPw === user.password){
   return user;
  }
 }catch(error){
  console.log(error);
 }
};
//디비에 대한 회원가입 기능
const signUp = async (email, pw) => {
 const encodedPw = await EncodingPw(pw);
  try{
  var result = await User.find({ email });
 }catch(error){
  console.log(error);
 }
 if(!result){ //디비에서 맞는 유저를 못찾았을경우
  try{
   await User.create({ email, encodedPw }); //유저 이메일과 암호화된 비밀번호를 디비에 저장
  return true; //회원가입성공
  }catch(error){
   console.log(error);
 }
 }

};
export default {signIn, signUp};