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


//window.onload = initAll;
//
//function initAll(){
//        document.getElementById("redirect").onclick = clickHandler();
//        }
//        
//function clickHandler(){
//        alert("Ow - that hurt");
//        return false;
//}

//window.onload = initAll;

//function initAll(){
//        switch(navigator.platform){
//                case "Win32" : alert("You are running Windows");
//                        break;
//                case "MacPPC" : alert("You are running Mac");
//                        break;
//                case "Linux": alert("You are running Linux");
//                        break;
//                default : alert("You are running " + navigator.platform);                 
//        }
//}


//window.onload = initAll;
//
//function initAll(){
//        var ans = prompt("Enter a number", "");
//        try{
//                if(!ans || isNaN(ans) || ans<0){
//                        throw new Error("Not a valid number");
//                }
//                alert("The square root of " + ans + " is " + Math.sqrt(ans));
//        }
//        catch (errMsg){
//                alert(errMsg.message);
//        }
//}

function start() {
  initAll();
  rollOverInit();
}
window.onload = start;

//~~~~~~~~~~~~~~~~~~~~~~~First Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

var usedNums = new Array(76);

function initAll() {
	if (document.getElementById) {
                document.getElementById("reload").onclick = anothercard;
                newCard();
		}
	else {
		alert("Update your browser");
	}
}

function newCard(){
      		for (var i = 0; i < 24; i++) {
			setSquare(i);
                }
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);
	var colBasis = colPlace[thisSquare] * 15;
	var newNum;
	do {
		newNum = colBasis + getNewNum() + 1;
	} while (usedNums[newNum]);

		usedNums[newNum] = true;
		document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}
 
function anothercard(){
        for (var i=1; i < usedNums.length; i++){
           usedNums[i] = false;     
        }
        newCard();
        return false;
}   
    
//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function rollOverInit(){
      for(var i=0; i<document.images.length; i++){
                if(document.images[i].parentNode.tagName == "A"){
                    setupRollover(document.images[i]);
                }
        }  
}


function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = rollOut;

	thisImage.overImage = new Image();
	thisImage.overImage.src = "img/" + thisImage.id + "_on.gif";
	thisImage.onmouseover = rollOver;
        
	thisImage.clickImage = new Image();
	thisImage.clickImage.src = "img/" + thisImage.id + "_click.gif";
	thisImage.onmousedown = rollClick;
        
	thisImage.parentNode.childImg = thisImage;
	thisImage.parentNode.onblur = rollOutChild;
	thisImage.parentNode.onfocus = rollOverChild;        
}

function rollOut() {
	this.src = this.outImage.src;
}

function rollOver() {
	this.src = this.overImage.src;
}

function rollClick() {
	this.src = this.clickImage.src;
}

function rollOutChild() {
	this.childImg.src = this.childImg.outImage.src;
}

function rollOverChild() {
	this.childImg.src = this.childImg.overImage.src;
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//