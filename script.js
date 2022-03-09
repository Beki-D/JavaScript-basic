function myFunction() {
    var x = parseInt(document.getElementById("mark").children[1].value);
    var y = parseInt(document.getElementById("total").children[1].value);
	var z = parseInt(document.getElementById("convert").children[1].value);
    //console.log(" x, y, z " + x +" "+ y +" "+ z)
    // If x is Not a Number or greater than y
    if (isNaN(x) || x > y) {
        var txt = "Input not valid";
        document.getElementById("result").innerHTML = txt;
    } else {
        txt = "Input ok";
        var v = (x * z)/y;
    }
    //console.log(" v " + v)
    document.getElementById("result").innerHTML = v;
}