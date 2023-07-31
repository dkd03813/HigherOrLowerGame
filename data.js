
document.getElementById("finalScore").innerHTML =
            localStorage.getItem("counter");

document.getElementById("restart").addEventListener("click", function resetCounter () {
    localStorage.removeItem("counter")
})