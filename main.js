
menue_list_array = [
"Chicken Tandoori Pizza",
"Veg Supreme Pizza ",
"Paneer Ticka Pizza",
"Delux Veggie Pizza",
"Veg Extravaganza Pizza"
];
function getmenue(){
    var htmldata;
    htmldata="<ol class='menuelist'>"
    menue_list_array.sort();
    for(var i=0;i<menue_list_array.length;i++){
        htmldata=htmldata +  menue_list_array[i]
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menue").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menue_list_array.push(item);
    menue_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menue_list_array.length;i++){
        htmldata=htmldata+'<div class="card">' +'<img src"images/pizzaImg.png"/>' + menue_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addmenue").innerHTML = htmldata;
}