div.onclick = function () {
    function pause() {
        elem.style.animationPlayState = "paused";
		elem.parentNode.removeChild(elem);
    }

	amountOfTargets--;
	var elem = document.getElementById(divId);
	var direction = (elem.includes("Left")) ? "Left" : "Right";
	var size = elem.substr(elem.length-1);
	var animationTime = {"L": 12, "M": 15, "S": 18};
	var scorePoints = {"L": 50, "M": 100, "S": 150};
	
	elem.style.backgroundImage = "url(sprites/spriteDead" + direction + size + ".png)";
	elem.style.animation = "playD" + size + " .3s steps(7) forwards, move" + direction[0] + " linear " + animationTime[size] + "s forwards";
	setTimeout(pause(), 300);
	scoreAmount += scorePoints[size];
	
	document.getElementById("scoreValue").innerText = scoreAmount;
}
