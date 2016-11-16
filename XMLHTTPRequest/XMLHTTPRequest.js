

/************************************
    Nasty Paths
************************************/
var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(request.responseText);
    }
};

// Nasty path (POST - API service doesn't take paremeters)
request.open("POST", "http://jsonplaceholder.typicode.com/posts", false);
request.setRequestHeader("Content-type", "application/json");
var jsonParameters = {
    "userId": 11,
    "id": 101,
    "title": "Some Title",
    "body": "Blah blah blah"
}
JSON.stringify(jsonParameters)
request.send(jsonParameters);

// Nasty path (opening request with one 'null' argument)
try {
    request.open(null);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with one 'null' argument")
}

// Nasty path (opening request with two 'null' arguments)
try {
    request.open(null, null);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with two 'null' arguments")
}

// Nasty path (opening request with three 'null' arguments)
try {
    request.open(null, null, null);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with three 'null' arguments")
}

// Nasty path (opening request with first argument 'null')
try {
    request.open(null, "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'null'")
}

// Nasty path (opening request with first argument 'empty string')
try {
    request.open("", "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'empty string'")
}

// Nasty path (opening request with first argument 'BLAH')
try {
    request.open("BLAH", "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'BLAH'")
}

// Nasty path (opening request with first argument 'true')
try {
    request.open(true, "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'true'")
}

// Nasty path (opening request with first argument '1')
try {
    request.open(1, "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument '1'")
}
