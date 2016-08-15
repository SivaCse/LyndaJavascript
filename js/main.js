//
//window.onload = writeMessage;
//
//function writeMessage(){
//        document.getElementById("helloMessage").innerHTML = "Javascript is Boss!";
//}

//alert("Howdy");
//
//if(navigator.cookieEnabled){
//        alert("Cookies yes");
//}else{
//    alert("cookies no");    
//}
//var ans = prompt("Are you sure you want to do that?","");
//if(ans){
//        alert("You said " + ans );
//}else{
//        alert("You did not answer");
//}

//if(confirm("Are you an asshole?")){
//        alert("You are an asshole");
//}else{
//        alert("You are not an asshole");
//}


window.onload = initAll;

function initAll(){
        document.getElementById("redirect").onclick = clickHandler();
        }
        
function clickHandler(){
        alert("Ow - that hurt");
        return false;
}
