// Store the data in localStorage
function store() {
  // Main Happypath
  var text = document.getElementById("text").value
  localStorage["myText"] = text;

  localStorage["json"] = JSON.stringify({ fName: "Cole", lName: "Panike", age: 26 })

  /************************************
      Strange Nasty Paths
  ************************************/
  // Strange path(Passed 'null' for first parameter)
  localStorage.setItem(null, "I'm trying to store this into a 'null' spot");
  console.log("null", localStorage.getItem(null));

  // Strange path(Passed 'true' for first parameter)
  localStorage.setItem(true, "I'm trying to store this into a 'true' spot");
  console.log("true", localStorage.getItem(true));

  // Strange path(Passed '1' for first parameter)
  localStorage.setItem(1, "I'm trying to store this into a '1' spot");
  console.log("1", localStorage.getItem(true));

  // Strange path(Passed '' for first parameter)
  localStorage.setItem("", "I'm trying to store this into a '' spot");
  console.log("empty string", localStorage.getItem(""));

  // Strange path(Passed an unset key in getItem)
  console.log("Used unset key in getItem: ", localStorage.getItem("BLAH"));

  /************************************
      Nasty Paths
  ************************************/
  // Nasty/Happy path (No value passed as the second parameter for setItem)
  try {
    localStorage.setItem("key");
  } catch (exception) {
    console.log(exception + " No value passed as the second parameter for setItem");
  }

  // Nasty/Happy path (No parameters passed in for setItem)
  try {
    localStorage.setItem();
  } catch (exception) {
    console.log(exception + " No parameters passed in for setItem");
  }

  // Nasty/Happy path(No parameters passed in for getItem)
  try {
    console.log(localStorage.getItem());
  } catch (exception) {
    console.log(exception + " No parameters passed in for getItem");
  }

  alert("Data has been stored")
}

function recall() {
  document.getElementById("recall").innerHTML = localStorage["myText"] + "<br>" + localStorage["json"]


}
