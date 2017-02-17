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
    if (getResults(input.value)) {
      setMessage("You Win! :)");
    } else if (!getresults(input.value) && attempt >= 10){
      setMessage("You Lose! :(");
    } else {
      setMessage("Incorrect, try again.");
    }
}

function setHiddenFields() {
  answer.value = Math.random() * 10000;
  answer.value = Math.floor(answer.value);
  answer.value = answer.toString();
  if (answer.value.length != 4) {
    while (answer.value.length < 4) {
      answer.value = "0" + answer.value;
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
  var result = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  var count = 0;
  for (var i = 0; i < 4; i++) {
    if (input[i] == answer[i]) {
      result += '<span class="glyphicon glyphicon-ok"></span>';
      count++;
    } else if (answer.indexOf(input[i]) != -1) {
      result += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      result += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  result += '</div></div>';
  document.getElementById('results').innerHTML = result;
  if (count == 4) {
    return true;
  } else {
    return false;
  }
}
