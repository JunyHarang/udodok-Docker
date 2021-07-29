const CryptoJS = require('crypto-js');
const pwEncrypt = (pw) => {
  let hash = CryptoJS.MD5(pw);
  let key = CryptoJS.enc.Utf8.parse(hash);
  let base64 = CryptoJS.enc.Base64.stringify(key);
  return base64;
};
export default pwEncrypt;