var batStat = {
 loadBat: function(){
return window.addEventListener("batterystatus", onBatteryStatus, false);
},
onBatteryStatus: function(info){
    // Handle the online event
	
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
	return("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
};
function onLoad2() {
        document.addEventListener("deviceready", onDeviceReady, false);
    },

    // device APIs are available
    //
    function onDeviceReady() {
        window.addEventListener("batterystatus", onBatteryStatus, false);
    },

    // Handle the batterystatus event
    //
    function onBatteryStatus(info) {
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }