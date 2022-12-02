// console.log("Java script code working from calcexecute.js [Daniel]");

////Code for verifying that jQuery is working 
// $(document).ready(function () {
//    if (jQuery) {
//        alert("jQuery is loaded and working correctly!");
//    } else {
//        alert("jQuery Does NOT Work");
//    }
// });


//jquery
$(document).ready(function () {
    //Equal button
    $('#calculatebutton').click(function(){
        CalculateExpression();
    });        
 });

 function CalculateExpression(){
    let contentInDisplay = $('#resultdisplay').text();

    //This api requires a special formatting of the url string
    // x -> *
    //let contentInDisplayReplaceMultiplication = contentInDisplay.replaceAll("x", "*");
    // , -> .
    //let contentInDisplayReplaceCorrectDotNotation = contentInDisplayReplaceMultiplication.replaceAll(",", ".");
    // + -> %2B
    //let contentInDisplayReplaceCorrectWithPlus = contentInDisplayReplaceCorrectDotNotation.replaceAll("+", "%2B");
    // x -> * | , -> . | + -> %2B
    //let postAppend = "?expr=" + contentInDisplayReplaceCorrectWithPlus;
    let replaceStringToApiRequirement = contentInDisplay.replaceAll("x", "*").replaceAll(",", ".").replaceAll("+", "%2B");
        
    let postAppend = "?expr=" + replaceStringToApiRequirement;
    $.ajax({
        type: "GET",
        url: "http://api.mathjs.org/v4/" + postAppend,
        success: function(response){            
            //This changes the display
            $('#resultdisplay').html(response.replace(".", ","));
        },
        failure: function (response) {
            alert("FAILURE ajax call=" + response.responseText);
            $('#resultdisplay').html("0,0");
            initValueFlag = true;
        },
        error: function (response) {
            alert("ERROR ajax call=" + response.responseText);
            $('#resultdisplay').html("0,0");
            initValueFlag = true;
        }
    })
 }