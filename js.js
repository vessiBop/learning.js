let myString = 'string of words within quotes';



for (i=0; i < myString.length; i++) {
    console.log(myString[i]);
    if ( myString[''] == "!") { break; }
    if ( myString[''] == "@") { break; }
    if ( myString[''] == "#") { break; }
    if ( myString[''] == "$") { break; }
    if ( myString[''] == "%") { break; }
    if ( myString[''] == "^") { break; }
    if ( myString[''] == "&") { break; }
    
}


let String = "i! a!m! a! s!t!r!i!n!g!"


for (let i=0; i < String.length; i++) {
    if (String[i] === "!") continue;
}

