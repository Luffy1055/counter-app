let count = 0

function increment(){
    count++
    document.getElementById("count-ele").textContent = count
}

function save(){
    document.getElementById("save-ele").textContent += count + " - "
    count = 0
    document.getElementById("count-ele").textContent = count
}

function clearsave(){
    document.getElementById("save-ele").textContent = "previous entries : "
}