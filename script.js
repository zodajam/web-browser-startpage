const input = document.getElementById("input");

window.onload = function() {
    input.focus();
};

input.addEventListener("keyup", (event) => {
    if(event.key == "Enter") {
        window.location.href = `https://duckduckgo.com/?q=${input.value}`;
    }
});