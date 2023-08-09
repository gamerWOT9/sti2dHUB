/*
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tabcontentb, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  tabcontentb = document.getElementsByClassName(cityName);
  for (i = 0; i < tabcontentb.length; i++) {
    tabcontentb[i].style.display = "block";
}
evt.currentTarget.className += " active-tablinks";
}
*/


/*
function compare_lname( a, b )
  {
  if ( a.lname.toLowerCase() < b.lname.toLowerCase()){
    return -1;
  }
  if ( a.lname.toLowerCase() > b.lname.toLowerCase()){
    return 1;
  }
  return 0;
}

students.sort(compare_lname);
console.log(students)
*/

/*
var namebtn = document.getElementsByClassName("activebtntablinks").getAttribute("value");
document.getElementById("BIGtitle1").innerHTML = namebtn;

const myAnchor = document.getElementById(" activebtntablinks") 
let text = myAnchor.getAttribute("target");
document.getElementById("BIGtitle1").innerHTML = text;
*/

/*
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("tabcontent");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("tablinks");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activebtntablinks");
    current[0].className = current[0].className.replace(" activebtntablinks", "");
    this.className += " activebtntablinks";
  });
}
*/