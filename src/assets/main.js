let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == "" && attempt == "") {
      setHiddenFields();
    }

    if (validateInput(input.value) == false) {
      return false;
    } else {
      attempt.value++;
      return true;
    }

    var result = getResults(input.value)();
    if (result) {
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } else if (!result && attempt.value >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again.");
    }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
  attempt.value = 0;
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
    if (input[i] == answer.value[i]) {
      result += '<span class="glyphicon glyphicon-ok"></span>';
      count++;
    } else if (answer.value.indexOf(input[i]) != -1) {
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

function showAnswer(result) {
  document.getElementById('code').innerHTML = answer.value;
  if (result) {
    code.className += " success";
  } else {
    code.className += " failure";
  }
}

function showReplay() {
  guessing-div.style.display = none;
  replay-div.style.display = block;
}
