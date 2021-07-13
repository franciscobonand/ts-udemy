// let userInput: any
var userInput;
var userName;
userInput = 5;
userInput = 'Hey';
if (typeof userInput == 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw {
        message: msg,
        errorCode: code
    };
}
var result = generateError("An error occurred!", 500);
console.log(result);
