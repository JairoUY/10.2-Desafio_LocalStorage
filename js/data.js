document.addEventListener("DOMContentLoaded", () => {
    const span = document.getElementById("data");
    const text = localStorage.getItem("text");
    
    span.textContent = text;
})