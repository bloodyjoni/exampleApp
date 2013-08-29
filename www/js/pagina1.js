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