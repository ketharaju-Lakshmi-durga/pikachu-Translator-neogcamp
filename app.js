var btntranslate=document.querySelector("#click");
var textInput=document.querySelector("#txtinput");
var outputdiv=document.querySelector("#output");


function clickHandler()
{ outputdiv.innerText="translateedddd"+textInput.value; 
    

};
btntranslate.addEventListener("click",clickHandler)