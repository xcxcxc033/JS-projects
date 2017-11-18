// var name = prompt("Enger your name here", "Blank");
// var date = new Date();
// var hours = date.getHours();
// 	document.writeln("<b>");
// 	document.writeln("<p> here is p </p>");
// 	if(hours < 12){
// 		document.write("morning " + name + " !");
// 	}else if(hours <= 18){
// 		document.write("afternoon " + name + " !");
// 	}else{
// 		document.write("evening " + name + " !");
// 	}

function bubleturn(){
	var doc = document.getElementById("bubble");
	if(doc.src.match("lighton")){
		// document.write("pp");
		document.getElementById("theh1").innerHTML = Date();
		doc.src = "lightoff.jpg";

	}else{
		// document.write("ss");
		document.getElementById("theh1").innerHTML = "MM";
		doc.src = "lighton.jpg";
	}
}
