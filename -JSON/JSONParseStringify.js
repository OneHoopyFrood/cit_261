// ======================================
// Parse
// ======================================
var jsonString = `{
  "fname" : "Cole",
  "lname" : "Panike",
  "age" : 26,
  "children" : [
    {
      "fname" : "Antia",
      "lname" : "Panike",
      "age" : 0
    }
  ]
}`
var parsedObj = JSON.parse(string)
console.log(parsedObj.children);

// Happy path (using reviver)
JSON.parse(jsonString, function (key, value) {
  console.log(key + ":" + value);
});

// Nasty path (Parsing with trailing commas)
try {
  string = '[1, 2, 3, 4, ]';
  JSON.parse(string);
} catch (exception) {
  console.log(exception + " Unexpected token exception (trailing comma)")
}

var string;
// Nasty path (Trying to parse random strings as JSON)
try {
  string = 'Hello World';
  JSON.parse(string);
} catch (exception) {
  console.log(exception + " Not JSON")
}

// Nasty path (empty string)
try {
  string = '';
  JSON.parse(string);
} catch (exception) {
  console.log(exception + " empty string")
}

// Nasty path (null)
try {
  string = null;
  JSON.parse(string);
} catch (exception) {
  console.log(exception + " null")
}

// Nasty path (number)
try {
  string = 5;
  JSON.parse(string);
} catch (exception) {
  console.log(exception + " number")
}

// Nasty path (no parameter)
try {
  JSON.parse();
} catch (exception) {
  console.log(exception + " no parameter")
}

// Nasty path (bool)
try {
  var json = JSON.parse(true);
  console.log(json)
} catch (exception) {
  console.log(exception + " boolean")
}

// Nasty path (extra parameters)
function reviver(key, value) {
  // Do Nothing
}
try {
  string = '[1, 2, 3, 4]';
  var json = JSON.parse(string, reviver, "", 5, null);
  console.log(json)
} catch (exception) {
  console.log(exception + " extra paremeters")
}

// ======================================
// Stringify
// ======================================
// Happy path (not using replacer or space)
var myJsonObject = {
  "fname" : "Cole",
  "lname" : "Panike",
  "age" : 26,
  "children" : [
    {
      "fname" : "Antia",
      "lname" : "Panike",
      "age" : 0
    }
  ]
}
console.log(JSON.stringify(myJsonObject));

// Happy path (using replacer, but not space)
function myReplacer(key, value) {
  if (key == "age")
    return "Wouldn't you like to know?";
  else
    return value;
}

var myJsonString = JSON.stringify(myJsonObject, myReplacer);
console.log(myJsonString);

// Happy path (using space, but not replace parameter)
myJsonString = JSON.stringify(myJsonObject, null, '  ');
console.log(myJsonString); // Each element is spaced over 2 spaces (sub-elements are space one space again depending on heirarchy)
myJsonString = JSON.stringify(myJsonObject, null, 4);
console.log(myJsonString); // Each element is spaced over 4 spaces (sub-elements are spaced another 10 spaces again depending on heirarchy)
myJsonString = JSON.stringify(myJsonObject, null, '\t');
console.log(myJsonString); // Each element is tabbed over (sub-elements are tabbed again depending on heirarchy)

// Happy path (using both replacer and space parameter)
myJsonString = JSON.stringify(myJsonObject, myReplacer, ' ');
console.log(myJsonString); // Spaced only one character and Filtered
myJsonString = JSON.stringify(myJsonObject, myReplacer, 4);
console.log(myJsonString); // Spaced 4 spaces and Filtered
myJsonString = JSON.stringify(myJsonObject, myReplacer, '\t');
console.log(myJsonString); // Tabbed over and Filtered

// Nasty path (empty string)
try {
  var string = JSON.stringify('');
  console.log(string + " empty string")
} catch (exception) {
  console.log(exception + " empty string")
}

// Nasty path (null)
try {
  var string = JSON.stringify(null);
  console.log(string + " null")
} catch (exception) {
  console.log(exception + " null")
}

// Nasty path (number)
try {
  var string = JSON.stringify(5);
  console.log(string + " number")
} catch (exception) {
  console.log(exception + " number")
}

// Nasty path (no parameter)
try {
  var string = JSON.stringify();
  console.log(string + " no parameter")
} catch (exception) {
  console.log(exception + " no parameter")
}

// Nasty path (bool)
try {
  var string = JSON.stringify(true);
  console.log(string + " boolean")
} catch (exception) {
  console.log(exception + " boolean")
}

// Stringify string

// Nasty path (extra parameters)
function reviver(key, value) {
  // Do Nothing
}
try {
  json = '[1, 2, 3, 4]';
  var string = JSON.stringify(json, reviver, "", 5, null);
  console.log(string + " extra paremeters")
} catch (exception) {
  console.log(exception + " extra paremeters")
}
