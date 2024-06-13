const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];
const btn = document.getElementById("btn"); // Button element which changes color when clicked.
const body = document.querySelector("body"); // Body element
const hexCode = document.getElementById("bg-hex-code"); // Span element where Hex Code from darColorsArr get stored
/**
 * getColorIndex function takes the length of darkColorsArr lenght and multiply it to random number between 0 to 9 (Math.random()) then we make the whole number 
 * of it by using Math.floor()
 * @returns index of darkColorsArr which is used to change the color present on that particular index
 */
function getColorIndex(){
    const colorIndex = Math.floor(darkColorsArr.length * Math.random());
    return colorIndex;
}
btn.addEventListener("click",()=>{
    body.style.backgroundColor = darkColorsArr[getColorIndex()]; // Set the dynamic background color that changes on click event of the button
    hexCode.innerText = darkColorsArr[getColorIndex()]; // Set the value of the Hex code dynamically.
})
