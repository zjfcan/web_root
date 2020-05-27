		
		browser = navigator.appName;
		browserNum = parseInt(navigator.appVersion);
		xPos = 0;
		yPos = 0;
		
		if ((browser == "Netscape") && (browserNum < 5))
		{
			// Netscape 4.x
			layerRef = "document.layers['";
			endLayerRef = "']";
			styleRef = "";
		}
		else if ((browser == "Netscape") && (browserNum >= 5))
		{
			// Netscape 6
			layerRef = "document.getElementById('";
			styleRef = ".style";
			endLayerRef = "')";
		}
		else
		{
			// Internet Explorer
			layerRef = "document.all['";
			endLayerRef = "']";
			styleRef = ".style";
		}
		
		// create way to remember which layer is visible
		oldLayer = "none";
		
		function showMenu(layerName)
		{
			//Set the position to the right of mouse cursor
			eval(layerRef + layerName + endLayerRef + styleRef + ".top = " + yPos);
			eval(layerRef + layerName + endLayerRef + styleRef + ".left = " + xPos);
			
			// show the layer the user wants to see
			eval(layerRef + layerName + endLayerRef + styleRef + ".visibility = 'visible'");
			
			// hide other window
			if (oldLayer != "none")
			{
				eval(layerRef + oldLayer + endLayerRef + styleRef + ".visibility = 'hidden'");
			}
			
			if (oldLayer == layerName)
			{
				oldLayer = "none";
			}
			else
			{
				oldLayer = layerName;
			}
			
		}

		function showMenuNotMove(layerName)
		{
			// show the layer the user wants to see
			eval(layerRef + layerName + endLayerRef + styleRef + ".visibility = 'visible'");
			
			// hide other window
			if (oldLayer != "none")
			{
				eval(layerRef + oldLayer + endLayerRef + styleRef + ".visibility = 'hidden'");
			}
			
			if (oldLayer == layerName)
			{
				oldLayer = "none";
			}
			else
			{
				oldLayer = layerName;
			}
			
		}

function mouseTracker(e) {
	e = e || window.Event || window.event;
	xPos = e.pageX || e.clientX;
	yPos = e.pageY || e.clientY;
}

if (window.captureEvents) {
    window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
	window.onmousemove = mouseTracker;
} else {
	document.onmousemove = mouseTracker;
}
