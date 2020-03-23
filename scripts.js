function* createIdGenerator() {
    let value = 1;
    while (value) {
        yield value++
    }
}
const idGenerator = createIdGenerator();
document.writeln `<p>Generator identificators:</p>`;
document.writeln `${idGenerator.next().value}`;
document.writeln `${idGenerator.next().value}`;
document.writeln `${idGenerator.next().value}`;


const addFonts = document.querySelector('.add_fonts');
const subtractFonts = document.querySelector('.subtract_fonts');
const sizeFonts = 14;

function* newFontGenerator(sizeFonts) {

    while (true) {
        let result = yield sizeFonts;
        if (result === "up") {
            sizeFonts += 2;
            document.querySelector(".sentence").style.fontSize = sizeFonts + "px";

        }
        if (result === "down") {
            sizeFonts -= 2;
            document.querySelector(".sentence").style.fontSize = sizeFonts + "px";


        } else {
            console.log("EROR");

        }

    }
}

const fontGenerator = newFontGenerator(sizeFonts);
addFonts.addEventListener("click", function () {
    fontGenerator.next("up").value;
})
subtractFonts.addEventListener("click", function () {
    fontGenerator.next("down").value;
})