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

//function start() {
//  initAll();
//  rollOverInit();
//  initLinks();
//  choosePic();
//  initForm();
//  initMenu();
//  carForms();
//}
//window.onload = start;

addOnload(initAll);
addOnload(rollOverInit);
addOnload(initLinks);
addOnload(choosePic);
addOnload(initForm);
addOnload(initMenu);
addOnload(carForms);


function addOnload(newFunction) {
	var oldOnload = window.onload;
	
	if (typeof oldOnload == "function") {
		window.onload = function() {
			if (oldOnload) {
				oldOnload();
			}
			newFunction();
		}
	}
	else {
		window.onload = newFunction;
	} 
}

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

//function rollOverInit() {
//	for (var i=0; i<document.links.length; i++) {
//		var linkObj =  document.links[i];
//		if (linkObj.id) {
//			var imgObj = document.getElementById(linkObj.id + "Img");
//			if (imgObj) {
//				setupRollover(linkObj,imgObj);
//			}
//		}
//	}
//}

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

//function setupRollover(thisLink,thisImage) {
//	thisLink.imgToChange = thisImage;
//	thisLink.onmouseout = rollOut;
//	thisLink.onmouseover = rollOver;	
//	
//	thisLink.outImage = new Image();
//	thisLink.outImage.src = thisImage.src;
//
//	thisLink.overImage = new Image();
//	thisLink.overImage.src = "img/" + thisLink.id + "_on.gif";
//}

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

//function rollOut() {
//	this.imgToChange.src = this.outImage.src;
//}
//
//function rollOver() {
//	this.imgToChange.src = this.overImage.src;
//}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//


var myPix = new Array("img/pathfinder.gif","img/surveyor.gif","img/surveyor98.gif");
var thisPic = 0;

function initLinks(){
        document.getElementById("prevLink").onclick = processPrevious;
        document.getElementById("nextLink").onclick = processNext;  
}

function processPrevious() {
	if (thisPic === 0) {
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}

function processNext() {
	thisPic++;
	if (thisPic == myPix.length) {
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

var newPix = new Array("img/teacup00.jpg","img/teacup01.jpg","img/teacup02.jpg","img/teacup03.jpg","img/teacup04.jpg","img/teacup05.jpg","img/teacup06.jpg","img/teacup07.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * newPix.length));
	document.getElementById("myRandom").src = newPix[randomNum];
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

window.onunload = function() {};

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;
	document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;

	if (newPage !== "") {
		window.location = newPage;
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function initMenu() {
	document.getElementById("months").selectedIndex = 0;
	document.getElementById("months").onchange = populateDays;
}

function populateDays() {
	var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var monthStr = this.options[this.selectedIndex].value;
	
	if (monthStr !== "") {
		var theMonth = parseInt(monthStr);
					
		document.getElementById("days").options.length = 0;
		for(var i=0; i<monthDays[theMonth]; i++) {
			document.getElementById("days").options[i] = new Option(i+1);
		}
	}
}


//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function carForms() {
	for (var i = 0; i < document.forms.length; i++) {
		document.forms[i].onsubmit = function() {
			return validForm();
		}
	}
}
//
//function validForm() {
//	var allGood = true;
//	var allTags = document.getElementsByTagName("*");
//
//	for (var i = 0; i < allTags.length; i++) {
//		if (!validTag(allTags[i])) {
//			allGood = false;
//		}
//	}
//	return allGood;
//
//	function validTag(thisTag) {
//		var outClass = "";
//		var allClasses = thisTag.className.split(" ");
//
//		for (var j = 0; j < allClasses.length; j++) {
//			outClass += validBasedOnClass(allClasses[j]) + " ";
//		}
//
//		thisTag.className = outClass;
//
//		if (outClass.indexOf("invalid") > -1) {
//			thisTag.focus();
//			if (thisTag.nodeName == "INPUT") {
//				thisTag.select();
//			}
//			return false;
//		}
//		return true;
//
//		function validBasedOnClass(thisClass) {
//			var classBack = "";
//
//			switch (thisClass) {
//				case "":
//				case "invalid":
//					break;
//				case "reqd":
//					if (allGood && thisTag.value === "") {
//						classBack = "invalid ";
//					}
//					classBack += thisClass;
//					break;
//				default:
//					classBack += thisClass;
//			}
//			return classBack;
//		}
//	}
//}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function validForm() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
	
		for (var j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
	
		thisTag.className = outClass;
	
		if (outClass.indexOf("invalid") > -1) {
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass(thisClass) {
			var classBack = "";
		
			switch(thisClass) {
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value === "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "radio":				
				case "email":
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck(thisTag,thisClass)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;
		}
				
		function crossCheck(inTag,otherFieldID) {
			if (!document.getElementById(otherFieldID)) {
				return false;
			}
			return (inTag.value == document.getElementById(otherFieldID).value);
		}
	}
}