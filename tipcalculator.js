var tipPercent = document.getElementById("tip-percent");


var billAmount= document.getElementById("bill-amount");

var numberPeople = document.getElementById("number-people");

var outPut = document.querySelector("p");


var allInputs = $( ":input" );

function addValue(){
$(".answer").text((((tipPercent.value * billAmount.value)/100)/numberPeople.value).toFixed(2));

}


function removeAll(){
  $("input").val("")
  $(".answer").text("")

}
