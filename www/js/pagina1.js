var batStat= {
function loadBat(){
window.addEventListener("batterystatus", onBatteryStatus, false);
}
function onBatteryStatus(info) {
    // Handle the online event
	return("Level: " + info.level + " isPlugged: " + info.isPlugged);
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
	
}
};