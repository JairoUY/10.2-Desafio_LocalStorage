document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputText");
    const button = document.getElementById("buttonText");

    button.addEventListener("click", () => {
        localStorage.setItem("text", input.value);
    })
})