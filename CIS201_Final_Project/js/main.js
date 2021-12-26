var cartItems =[];
var isTotalHidden = true;

var burger = {
    name: "Burger",
    price: 10
}
var fries = {
    name: "fries",
    price: 7
}
var drink = {
    name: "drink",
    price: 5
}

function addToCart (item){
    cartItems.push(item);
    document.getElementById("itemCounter").innerHTML = cartItems.length;
    showTotal();
}
function showTotal(){
    var orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";
    var items = document.getElementById("items");
    items.innerHTML = "";
    var x = "";
    var tag = document.createElement("P");
    
    if(isTotalHidden === false){
        var total = 0;
            for(var i = 0 ; i< cartItems.length ; i++){
                total += cartItems[i].price;
                x += cartItems[i].name;
                x += ":";
                x += cartItems[i].price;
                x += "<br/>";
            }
        orderTotal.innerHTML += "Total:$"+total;
        items.innerHTML += x;
        console.log(items);
    }
}
function clickCart(){
    isTotalHidden = !isTotalHidden;
    showTotal();
}
