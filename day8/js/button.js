const btn = document.getElementById("btn")
let count = 0
btn.addEventListener("click", function(e) {
    count += 1
    btn.firstChild.nodeValue = count
    e.preventDefault(e)
})