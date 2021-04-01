var video = document.querySelector("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *=.9;
	console.log(video.playbackRate);
});

// document.querySelector("#skip").addEventListener("change", function() {

// });

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted");	
	video.muted = true;

});



document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	var slider = this.value;
	video.volume = slider / 100;
});




// document.querySelector("#vintage").addEventListener("click", function() {

// });

// document.querySelector("#orig").addEventListener("click", function() {

// });