
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result+="The "+myAdjective+" "+myNoun+ " looked around "+myAdverb+ ". then "+ myVerb+" into the house";
    console.log('result',result);
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("cat", "big", "ran", "quickly");
  