
/**
 * Flips a bit of random position in a binary string
 * @param {string} binary string of 0s and 1s
 * @param {number} bitPosition position of bit to flip
 * @returns {string} binary string with a bit flipped
 */
function flipBit(binary, bitPosition) {
    const bit = binary[bitPosition];
    const flippedBit = bit === "0" ? "1" : "0";
    const binaryArray = binary.split("");
    binaryArray.splice(bitPosition, 1, flippedBit)
    return binaryArray.join("");
}

/**
 * Displays the character data of a target character and its flipped versions
 * @param {string} char character to display data of
 * @returns {void}
 */
function displayTargetCharData(char) {
    const charCode = char.charCodeAt(0);
    const charCodeBinary = charCode.toString(2).padStart(16, '0');
    const outputCharDataElem = document.getElementById("outputCharData");
    let outputData = `${char}<br>Hex: ${charCode.toString(16)}<br>Bin: ${charCodeBinary}<br>`;
    for (let i = 0; i < 16; i++) {
        const flippedCharCodeBinary = flipBit(charCodeBinary, i);
        const outputChar = String.fromCharCode(parseInt(flippedCharCodeBinary, 2));
        outputData += `${outputChar} (${i}): ${flippedCharCodeBinary}<br>`;
    }
    outputCharDataElem.innerHTML = outputData + "<br>" + outputCharDataElem.innerHTML;
}

const targetCharElem = document.getElementById("targetChar");

targetCharElem.addEventListener("change", (e) => {
    const char = e.target.value;
    displayTargetCharData(char);
});

targetCharElem.value = "愛";
targetCharElem.dispatchEvent(new Event("change"));
