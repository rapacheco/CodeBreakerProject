let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }

    if (!validateInput(input.value)) {
      return;
    }
    attempt.value++;

    if (getResults(input.value)) {
      setMessage('You Win! :)');
      showAnswer(true);
      showReplay();
    } else if (attempt.value >= 10){
      setMessage('You Lose! :(');
      showAnswer(false);
      showReplay();
    } else {
      setMessage('Incorrect, try again.');
    }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = '0' + answer.value;
  }
  attempt.value = '0';
}

function setMessage(mes) {
  document.getElementById('message').innerHTML = mes;
}

function validateInput(guess) {
  if (guess.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}

function getResults(input) {
  let result = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) == answer.value.charAt(i)) {
      result += '<span class="glyphicon glyphicon-ok"></span>';
      count++;
    } else if (answer.value.indexOf(input.charAt(i)) > -1) {
      result += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      result += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  result += '</div></div>';
  document.getElementById('results').innerHTML += result;
  if (count == 4) {
    return true;
  }
  return false;
}

function showAnswer(end) {
  let code = document.getElementById('code');
  if (end) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
  code.innerHTML = answer.value;
}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}
