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
    // console.log("Reset button was clicked");
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
        if (initValueFlag == true){
            document.getElementById("resultdisplay").innerHTML = operandCharacter;
            initValueFlag = false;
        }
        else {
            document.getElementById("resultdisplay").innerHTML  += operandCharacter;
        }
    })
  })  


//   // Sets display to 0,0
// document.getElementById("calculatebutton").onclick = function()
// {        
//     // //API - https://api.mathjs.org/
//     let contentInDisplay = document.getElementById("resultdisplay").innerHTML;
//     let replaceStringToApiRequirement = contentInDisplay.replaceAll("x", "*").replaceAll(",", ".").replaceAll("+", "%2B");
        
//     let postAppend = "?expr=" + replaceStringToApiRequirement;

//     let urlToAPI = "http://api.mathjs.org/v4/" + postAppend;    

//     // //Create a XHR object
//     var xhr = new XMLHttpRequest();
//     //OPEN - type, url/file, async(true/false)
//     xhr.open('GET', urlToAPI, true);
    
//     //This code will be fired when we get a response
//     xhr.onload = () => {
//         //Convert to JSON data
//         //const data = JSON.parse(xhr.response);
        
//         //200 is OK
//         if (xhr.status == 200){
//             document.getElementById("resultdisplay").innerHTML = xhr.response.replace(".", ",");
//         }
//         //400 is failure
//         else if (xhr.status == 400){
//             alert("ERROR failure API call=" + xhr.response);
//             document.getElementById("resultdisplay").innerHTML  = "0,0";
//             initValueFlag = true;
//         }                
//     };    
//     //Send the request
//     xhr.send();         
// }


//https://www.youtube.com/watch?v=4K33w-0-p2c
  // Sets display to 0,0
  document.getElementById("calculatebutton").onclick = function()
  {        
      // //API - https://api.mathjs.org/
      let contentInDisplay = document.getElementById("resultdisplay").innerHTML;
      
      let replaceStringToApiRequirement = contentInDisplay.replaceAll("x", "*").replaceAll(",", ".").replaceAll("+", "%2B");          
      let postAppend = "?expr=" + replaceStringToApiRequirement;
      let urlToAPI = "http://api.mathjs.org/v4/" + postAppend;
      
      sendHttpRequest(urlToAPI).then(responseData => {
        //console.log(responseData);
        document.getElementById("resultdisplay").innerHTML = responseData.replace(".", ",");
      });
  
          
  }

  const sendHttpRequest = (url) => {
    const promise = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = () => {          
            // if (xhr.status == 200){
            //     document.getElementById("resultdisplay").innerHTML = xhr.response.replace(".", ",");
            // }
            // else if (xhr.status == 400){
            //     alert("ERROR failure API call=" + xhr.response);
            //     document.getElementById("resultdisplay").innerHTML  = "0,0";
            //     initValueFlag = true;
            // } 
                resolve(xhr.response);                         
        };    

        xhr.send();
    });
    return promise;
  };
