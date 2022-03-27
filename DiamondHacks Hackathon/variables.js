var num1 = 0;
function save() {
    num1 = document.getElementById("numPpl").value;
    sessionStorage.setItem("num1", num1);
}

var address = null;
function saveAddress() {
    address = document.getElementById("Address").value;
    sessionStorage.setItem("address", address);
}