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
addOnload(initImages);
addOnload(nameFieldInit);
addOnload(showCookies);
addOnload(initPageCookie);
//addOnload(cookieDelete);
addOnload(initForm2);
addOnload(initDate);
addOnload(showTheTime);



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


//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//


function initImages() {
	for (var i=0; i<document.images.length; i++) {
		document.images[i].ondblclick = newWindow;
	}
}

function newWindow() {
	var imgName = "img/" + this.id + ".jpg";
	var imgWindow = window.open(imgName, "imgWin", "width=320,height=240,scrollbars=no");
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

//document.onkeydown = keyHit;
//var thePic = 0;
//
//function keyHit(evt) {
//	var mySpacePix = new Array("img/callisto.jpg","img/europa.jpg","img/io.jpg","img/ganymede.jpg");
//	var imgCt = mySpacePix.length-1;
//	var ltArrow = 37;
//	var rtArrow = 39;
//	var thisKey;
//
//	if (evt) {
//		thisKey = evt.which;
//	}
//	else {
//		thisKey = window.event.keyCode;
//	}
//	
//	if (thisKey == ltArrow) {
//		chgSlide(-1);
//	}
//	else {
//		if (thisKey == rtArrow) {
//			chgSlide(1);
//		}
//	}
//	return false;
//
//	function chgSlide(direction) {
//		thePic = thePic + direction;
//		if (thePic > imgCt) {
//			thePic = 0;
//		}
//		if (thePic < 0) {
//			thePic = imgCt;
//		}
//		document.getElementById("myPicture").src = mySpacePix[thePic];
//	}
//}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function nameFieldInit() {
	var userName = "";
	if (document.cookie !== "") {
		userName = document.cookie.split("=")[1];
	}

	document.getElementById("nameField").value = userName;
	document.getElementById("nameField").onblur = setCookie;
}

function setCookie() {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);

	var userName = document.getElementById("nameField").value;
	document.cookie = "userName=" + userName + ";path=/;expires=" + expireDate.toGMTString();
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function showCookies() {
	var outMsg = "";

	if (document.cookie === "") {
		outMsg = "There are no cookies here";
	}
	else {
		var thisCookie = document.cookie.split("; ");
		for (var i=0; i<thisCookie.length; i++) {
			outMsg += "Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg += "', and the value is '" + thisCookie[i].split("=")[1] + "'<br />";
		}
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//


//function initPageCookie() {
//	var expireDate = new Date();
//	expireDate.setMonth(expireDate.getMonth()+6);
//
//	var hitCt = parseInt(cookieVal("pageHit"));
//	hitCt++;
//
//	document.cookie = "pageHit=" + hitCt + ";path=/;expires=" + expireDate.toGMTString();
//	document.getElementById("pageHits").innerHTML = "You have visited this page " + hitCt + " times.";
//}
//
//function cookieVal(cookieName) {
//	var thisCookie = document.cookie.split("; ");
//
//	for (var i=0; i<thisCookie.length; i++) {
//		if (cookieName == thisCookie[i].split("=")[0]) {
//			return thisCookie[i].split("=")[1];
//		}
//	}
//	return 0;
//}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//


//function cookieDelete() {
//	var cookieCt = 0;
//
//	if (document.cookie !== "" && confirm("Do you want to delete the cookies?")) {
//		var thisCookie = document.cookie.split("; ");
//		cookieCt = thisCookie.length;
//
//		var expireDate = new Date();
//		expireDate.setDate(expireDate.getDate()-1);
//
//		for (var i=0; i<cookieCt; i++) {
//			var cookieName = thisCookie[i].split("=")[0];
//			document.cookie = cookieName + "=;path=/;expires=" + expireDate.toGMTString();
//		}
//	}
//	document.getElementById("cookieData").innerHTML = "Number of cookies deleted: " + cookieCt;
//}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//


function initPageCookie() {
	var now = new Date();
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	var lastVisit = cookieVal("pageVisit");
	if (lastVisit === 0) {
		lastVisit = "";
	}

	document.cookie = "pageHit=" + hitCt + ";path=/;expires=" + expireDate.toGMTString();
	document.cookie = "pageVisit=" + now + ";path=/;expires=" + expireDate.toGMTString();

	var outMsg = "You have visited this page " + hitCt + " times.";
	if (lastVisit !== "") {
		outMsg += "<br />Your last visit was " + lastVisit;
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");

	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function initForm2() {
	document.getElementsByTagName("form")[0].onsubmit = addNode;
	document.getElementById("deleteNode").onclick = delNode;
}

function addNode() {
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);

	return false;
}

function delNode() {
	var allGrafs = document.getElementsByTagName("p");
	
	if (allGrafs.length > 1) {
		var lastGraf = allGrafs.item(allGrafs.length-1);
		var docBody = document.getElementsByTagName("body")[0];
		var removed = docBody.removeChild(lastGraf);
	}
	else {
		alert("Nothing to remove!");
	}

	return false;
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function initDate() {
	var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
	var now = new Date();
	var thisMonth = now.getMonth() + 1;
	
	var dtString = "Today is " + dayName[now.getDay()] + ", and the date can be written as:<ul><li>";
	dtString += monName[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear() + "</li><li>";
	dtString += now.getDate() + " " + monName[now.getMonth()] + " " + now.getFullYear() + "</li><li>";
	dtString += thisMonth + "-" + now.getDate() + "-" + now.getFullYear() + "</li><li>";
	dtString += now.getDate() + "-" + thisMonth + "-" + now.getFullYear() + "</li></ul>";

	document.getElementById("dtField").innerHTML = dtString;
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//

function showTheTime() {
	var now = new Date();

	var theTime = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	document.getElementById("showTime").innerHTML = theTime;
	setTimeout("showTheTime()",1000);
	
	function showTheHours(theHour) {
		if (theHour === 0) {
			return 12;
		}
		if (theHour < 13) {
			return theHour;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}
	
	function showAmPm() {
		if (now.getHours() < 12) {
			return " am";
		}
		return " pm";
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~Next Module~~~~~~~~~~~~~~~~~~~~~~~~~~//


