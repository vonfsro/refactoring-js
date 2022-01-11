// CLICK ON THE TARGET
div.onclick = function () {
	amountOfTargets--;
	var elem = document.getElementById(divId);

	// click on the Large target going to left
	if (elem.className == "spriteLiveLeftL") {
		elem.style.backgroundImage = "url(sprites/spriteDeadLeftL.png)";
		elem.style.animation = "playDL .3s steps(7) forwards, moveL linear 12s forwards";
		setTimeout(function () {
			elem.style.animationPlayState = "paused";
			elem.parentNode.removeChild(elem);
		}, 300);
		scoreAmount += 50;
	}
	// click on the Medium target going to left        
	if (elem.className == "spriteLiveLeftM") {
		elem.style.backgroundImage = "url(sprites/spriteDeadLeftM.png)";
		elem.style.animation = "playDM .3s steps(7) forwards, moveL linear 15s forwards";
		setTimeout(function () {
			elem.style.animationPlayState = "paused";
			elem.parentNode.removeChild(elem);
		}, 300);
		scoreAmount += 100;
	}
	// click on the Small target going to left        
	if (elem.className == "spriteLiveLeftS") {
		elem.style.backgroundImage = "url(sprites/spriteDeadLeftS.png)";
		elem.style.animation = "playDS .3s steps(7) forwards, moveL linear 18s forwards";
		setTimeout(function () {
			elem.style.animationPlayState = "paused";
			elem.parentNode.removeChild(elem);
		}, 300);
		scoreAmount += 150;
	}

	// click on the Large target going to right
	if (elem.className == "spriteLiveRightL") {
		elem.style.backgroundImage = "url(sprites/spriteDeadRightL.png)";
		elem.style.animation = "playDL .3s steps(7) forwards, moveR linear 12s forwards";
		setTimeout(function () {
			elem.style.animationPlayState = "paused";
			elem.parentNode.removeChild(elem);
		}, 300);
		scoreAmount += 50;
	}
	// click on the Medium target going to right        
	if (elem.className == "spriteLiveRightM") {
		elem.style.backgroundImage = "url(sprites/spriteDeadRightM.png)";
		elem.style.animation = "playDM .3s steps(7) forwards, moveR linear 15s forwards";
		setTimeout(function () {
			elem.style.animationPlayState = "paused";
			elem.parentNode.removeChild(elem);
		}, 300);
		scoreAmount += 100;
	}
	// click on the Small target going to right        
	if (elem.className == "spriteLiveRightS") {
		elem.style.backgroundImage = "url(sprites/spriteDeadRightS.png)";
		elem.style.animation = "playDS .3s steps(7) forwards, moveR linear 18s forwards";
		setTimeout(function () {
			elem.style.animationPlayState = "paused";
			elem.parentNode.removeChild(elem);
		}, 300);
		scoreAmount += 150;
	}

	document.getElementById("scoreValue").innerText = scoreAmount;
}