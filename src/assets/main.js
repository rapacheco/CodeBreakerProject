let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == "" && attempt == "") {
      setHiddenFields();
    }
    if (!validateInput(input.value)) {
      return false;
    } else {
      attempt++;
    }
}

function setHiddenFields() {
  answer = Math.random() * 10000;
  answer = Math.floor(answer);
  answer = answer.toString();
  if (answer.length != 4) {
    while (answer.length < 4) {
      answer = "0" + answer;
    }
  }
  attempt = 0;
}

function setMessage(mes) {
  document.getElementById('message').innerHTML = mes;
}

function validateInput(guess) {
  if (guess.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  result = "<div class="row"><span class="col-md-6">" + input + "</span><div class="col-md-6">";
  for (var i = 0; i < 4; i++) {
    if (input[i] == answer[i]) {
      result += "<span class="glyphicon glyphicon-ok"></span>";
    } else if (answer.indexOf(input[i]) != -1) {
      result += "<span class="glyphicon glyphicon-transfer"></span>";
    } else {
      result += "<span class="glyphicon glyphicon-remove"></span>";
    }
  }
  result += "</div></div>";
  document.getElementById('results').innerHTML = result;
}
