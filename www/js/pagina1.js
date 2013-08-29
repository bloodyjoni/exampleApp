var batStat =new String("");
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
		batStat="Level: " + info.level + " isPlugged: " + info.isPlugged;
		alert(batStat);
	}
