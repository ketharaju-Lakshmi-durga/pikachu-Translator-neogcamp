var btntranslate=document.querySelector("#click");
var textInput=document.querySelector("#txtinput");
console.log(txtinput)
function clickHandler()
{
    console.log("clicked");
    console.log("input",textInput.value);

};
btntranslate.addEventListener("click",clickHandle r)