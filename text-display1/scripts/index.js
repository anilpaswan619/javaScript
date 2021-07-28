function getDescription(text) {
    return text.substring(0,text.length);

}

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
});

