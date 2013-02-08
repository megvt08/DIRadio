$(function() {
	$("#main").click(function(){
		$("#wrap").html('<h3>DI Radio Stations</h3><ul id="channellist"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></ul>');
		getRadio();
	});
	
	$("#conf").click(function(){
		$.get('config.html', function (data) {
			$("#wrap").html(data);
		});
		
		var xmlString = air.NativeApplication.nativeApplication.applicationDescriptor; 
		var appXml = new DOMParser(); 
		var xmlobject = appXml.parseFromString(xmlString, "text/xml"); 
		var root = xmlobject.getElementsByTagName('application')[0]; 
		var appId = root.getElementsByTagName("id")[0].firstChild.data; 
		var appVersion = root.getElementsByTagName("version")[0].firstChild.data; 
					
		$("#currVersion").html(appId + " - Version " + appVersion);
		
		var strTrue = new air.ByteArray();
	    strTrue.writeUTFBytes('true');
				
		var strFalse = new air.ByteArray();
	    strFalse.writeUTFBytes('false');
			
		if ( startup() === true ) { 
			document.getElementById("yes").className = 'btn active';
			document.getElementById("no").className = 'btn';
		}
		else { 
			document.getElementById("no").className = 'btn active';
			document.getElementById("yes").className = 'btn';
		}
		
		var desc = air.EncryptedLocalStore.getItem('desc')
				
		document.getElementById("listenkey").value = listenkey;
		document.getElementById("key").innerHTML = listenkey;
				
		if ( desc == 'true' ) { 
			document.getElementById("yes2").className = 'btn active';
			document.getElementById("no2").className = 'btn';
		}
		else { 
			document.getElementById("no2").className = 'btn active'; 
			document.getElementById("yes2").className = 'btn';
		}
	});
});