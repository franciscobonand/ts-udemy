"use strict";
// Watch mode: tsc file.ts -w
// For whole project:
// tsc --init
// tsc
const button = document.querySelector("button");
let someID = "123456";
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(msg) {
    console.log("Clicked! " + msg);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "Hey yo!"));
}
//# sourceMappingURL=app.js.map