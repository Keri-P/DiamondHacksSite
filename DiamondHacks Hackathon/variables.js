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

var situation = null;

  function setSituation() {
  if(document.getElementById('verbal abuse').checked == true) {   
    situation = "verbal abuse";
  }
  else if(document.getElementById('physical abuse').checked == true) {   
    situation = "physical abuse";
  }
  else if(document.getElementById('sexual abuse').checked == true) {   
    situation = "sexual abuse";
  }
  else if(document.getElementById('toxic controlling').checked == true) {   
    situation = "toxic controlling";
  }
  else if(document.getElementById('general fear and danger').checked == true) {   
    situation = "general fear and danger";
  }
  sessionStorage.setItem("situation", situation);
}


var danger = null;

function setDanger() {
    if(document.getElementById('calm').checked == true) {   
        danger = "calm";
      }
      else if(document.getElementById('uncomfortable').checked == true) {   
        danger = "uncomfortable";
      }
      else if(document.getElementById('want to leave').checked == true) {   
        danger = "want to leave";
      }
      else if(document.getElementById('send help').checked == true) {   
        danger = "send help";
      }
      else if(document.getElementById('immediate danger').checked == true) {   
        danger = "immediate danger";
      }
      sessionStorage.setItem("danger", danger);
    }