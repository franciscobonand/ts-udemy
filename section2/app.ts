// let userInput: any
let userInput: unknown
let userName: string

userInput = 5
userInput = 'Hey'

if (typeof userInput == 'string') {
    userName = userInput
}

function generateError(msg: string, code: number): never {
    throw {
        message: msg,
        errorCode: code
    }
    // while(true) {}
}

const result = generateError("An error occurred!", 500)