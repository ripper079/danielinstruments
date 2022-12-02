//console.log("Java script code working from js_file.js [Daniel]");

let initValueFlag = true;

document.getElementById("buttonDel").onclick = function()
{
    var currentTextInDisplay = document.getElementById("resultdisplay").innerHTML;

    //Remove last char in string
    if (currentTextInDisplay.length > 0)
    {
        currentTextInDisplay = currentTextInDisplay.substring(0, currentTextInDisplay.length - 1);
        
        if (currentTextInDisplay.length == 0)
        {
            document.getElementById("resultdisplay").innerHTML  = "0,0";
            initValueFlag = true;
        }
        else {
            document.getElementById("resultdisplay").innerHTML  = currentTextInDisplay;
            initValueFlag = false;
        }
    }        
}

// Sets display to 0,0
document.getElementById("buttonReset").onclick = function()
{
    console.log("Reset button was clicked");
    document.getElementById("resultdisplay").innerHTML  = "0,0";
    initValueFlag = true;
}


// For all numerical buttons
document.querySelectorAll('.numbutton').forEach(item => {
    item.addEventListener('click', event => {
        var number = event.target.innerHTML;
        if (initValueFlag == true)
    {
        document.getElementById("resultdisplay").innerHTML = number;
        initValueFlag = false;
    }
    else 
    {
        document.getElementById("resultdisplay").innerHTML  += number;
    }
    })
  })

  // For all operand buttons
document.querySelectorAll('.operandbutton').forEach(item => {
    item.addEventListener('click', event => {
        var operandCharacter = event.target.innerHTML;
        if (initValueFlag == true)
    {
        document.getElementById("resultdisplay").innerHTML = operandCharacter;
        initValueFlag = false;
    }
    else 
    {
        document.getElementById("resultdisplay").innerHTML  += operandCharacter;
    }
    })
  })  