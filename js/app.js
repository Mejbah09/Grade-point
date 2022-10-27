function grade() {
  var num = document.getElementById("mark").value;
  var result = document.getElementById("result");
  var intro = "Your Grade is ";

  if (num >= 80 && num <= 100) {
    result.innerHTML = "CONGRATULATIONS     " + intro + "    A+";
    result.style.color = "green";
  } else if (num >= 70 && num <= 79) {
    result.innerHTML = intro + "    A";
    result.style.color = "blue";
  } else if (num >= 60 && num <= 69) {
    result.innerHTML = intro + "    A-";
    result.style.color = "blue";
  } else if (num >= 50 && num <= 59) {
    result.innerHTML = intro + "    B";
    result.style.color = "blue";
  } else if (num >= 40 && num <= 49) {
    result.innerHTML = intro + "    C";
    result.style.color = "blue";
  } else if (num >= 33 && num <= 39) {
    result.innerHTML = intro + "    D";
    result.style.color = "blue";
  } else if (num >= 0 && num <= 32) {
    result.innerHTML = "SORRY!!!!" + intro + "    F";
    result.style.color='red'
  } else {
    alert(num + "    result not founded");
  }
}
