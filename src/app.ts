// Watch mode: tsc file.ts -w
// For whole project:
// tsc --init
// tsc
const button = document.querySelector("button")!

button.addEventListener('click', () => {
    console.log("Clicked!")
})