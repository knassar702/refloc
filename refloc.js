var style = 'color: tomato; background:#eee; -webkit-text-stroke: 1px black; font-size:30px;';
function x1(target,parameter) {
            var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 ) {
                        if (this.responseText.includes('refloc>')) {
                            console.log("%s [refloc>]  %s ",parameter.split('=')[0],target.replace(parameter,parameter))
                            return 1
                        }
            }
         };
         xhttp.open("GET", target.replace(parameter,parameter + "refloc>"), true);
         xhttp.withCredentials = true;
         xhttp.send();
}

function x2(target,parameter) {
            var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 ) {
                        if (this.responseText.includes('refloc<')) {
                            console.log("%s [refloc<]  %s ",parameter.split('=')[0],target.replace(parameter,parameter))
                            return 1
                        }
            }
         };
         xhttp.open("GET", target.replace(parameter.split('=')[0],parameter + "refloc<"), true);
         xhttp.withCredentials = true;
         xhttp.send();
}

function x3(target,parameter) {
            var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 ) {
                        if (this.responseText.includes('refloc"')) {
                            console.log('%s [refloc"]  %s ',parameter.split('=')[0],target.replace(parameter,parameter))
                            return 1
                        }
            }
         };
         xhttp.open("GET", target.replace(parameter,parameter + 'refloc"'), true);
         xhttp.withCredentials = true;
         xhttp.send();
}

function x4(target,parameter) {
            var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 ) {
                        if (this.responseText.includes("refloc'")) {
                            console.log("%s [refloc']  %s  ",parameter.split('=')[0],target.replace(parameter,parameter))
                            var xss
                        }
            }
         };
         xhttp.open("GET", target.replace(parameter,parameter + "refloc'"), true);
         xhttp.withCredentials = true;
         xhttp.send();
}


function start_scan() {
	for (param of window.location.href.split('?')[1].split('&')) {
	try {
    	x1(document.location.href,param)
	}
	catch(err) {
  	// hmm
	}
	try {
    	x2(document.location.href,param)
	}
	catch(err) {
  	// hmm
	}
	try {
    	x3(document.location.href,param)
	}
	catch(err) {
  	// hmm
	}
	try {
    	x4(document.location.href,param)
	}
	catch(err) {
  // hmm
	}
  }
}
start_scan()
