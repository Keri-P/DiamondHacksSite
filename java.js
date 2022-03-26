function storeNumber(){
    let input = document.getElementById("userInput").ariaValueMax;
    alert(input)
}
var form;
form = document.getElementById('form');
          number = document.getElementById('number');
      form.onsubmit = function() {
         var variable = number.value;
         alert( variable );
      };