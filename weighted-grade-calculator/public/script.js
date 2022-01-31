// add activities
var activities = 4;
addBtn = document.querySelector("#add");
addBtn.addEventListener('click', function () {
  activities += 1;
  document.querySelector("table").insertAdjacentHTML("beforeend", '<tr><td>Activity ' + activities + '</td><td>A' + activities + '</td><td><input id="w' + activities + '"></input></td><td><input id="grade' + activities + '"></input>/<input id="total' + activities + '"></input></td><td id="percent'+activities+'"></td></tr>');
})

// update percent
document.addEventListener("keyup", function () {
  for (var i = 1; i < activities+1; i++) {
    var num = document.querySelector("#grade" + i).value / document.querySelector("#total" + i).value;
    if (!isNaN(num) && isFinite(num)) {
      document.querySelector("#percent"+i).innerHTML = num*100+"%";
    }
  }
})

// calculate mean
meanBtn = document.querySelector("#mean");
meanBtn.addEventListener('click', function() {
  var count = 0;
  var weight = 0;
  var filled = true;
  for (var i = 1; i < activities+1; i++) {
    if (document.querySelector("#grade"+i).value != "" && document.querySelector("#total"+i).value != "") {
        if (document.querySelector("#total"+i).value != 0) {
          count += document.querySelector("#grade" + i).value / document.querySelector("#total" + i).value;
          weight += 1;
        }
    }
    else {
      filled = false;
    }
  }
  if (filled) {
    document.querySelector("#res").innerHTML = count/weight*100+"%";
  }
  else {
    alert("Fill it in");
  }
})

// calculate weighted
weightBtn = document.querySelector("#weighted");
weightBtn.addEventListener('click', function() {
  var count = 0;
  var totalweight = 0;
  var filled = true;
  for (var i = 1; i < activities+1; i++) {
    if (document.querySelector("#w"+i).value != "" && document.querySelector("#grade"+i).value != "" && document.querySelector("#total"+i).value != "") {
        count += document.querySelector("#w"+i).value * document.querySelector("#grade" + i).value / document.querySelector("#total" + i).value;
        totalweight += document.querySelector("#w"+i).value*1;
    }
    else {
      filled = false;
    }
  }
  if (filled) {
    document.querySelector("#res").innerHTML = count/totalweight*100+"%";
  }
  else {
    alert("Fill it in");
  }
})