var args = process.argv.slice(2);
var password = args[0];

function obfuscate (password) {

var r_password = ""
for(var i = 0; i < password.length; i++){
 if(password[i] === 'a') {
   r_password += '4'
 } else if(password[i] === 'e') {
   r_password += '3'
 } else if(password[i] === 'o') {
   r_password += '0'
 } else if(password[i] === 'l') {
   r_password += '1'
 } else {
   r_password += password[i] ;
 }
}

return r_password ;

}
var finalpass = obfuscate(password);
console.log(finalpass);