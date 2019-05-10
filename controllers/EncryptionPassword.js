import crypto from "crypto";
const encoding = "base64";
//비밀번호 인코딩
const encode = function(password){
    //단방향 암호화
    crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(password, buf.toString(encoding), 10000, 64, 'sha512', (err, key) => {
            return key.toString(encoding);
    });
    });
};
export default encode;