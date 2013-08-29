var batStat= {
function loadBat(){
window.addEventListener("batterystatus", onBatteryStatus, false);
}
function onBatteryStatus(info) {
    // Handle the online event
	
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
	return("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
};
function onLoad2() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        window.addEventListener("batterystatus", onBatteryStatus, false);
    }

    // Handle the batterystatus event
    //
    function onBatteryStatus(info) {
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }