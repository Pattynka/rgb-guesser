let r = 0;
let g = 0;
let b = 0;
let rans = 0;
let gans = 0;
let bans = 0;

function losowanie()
{
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	document.getElementById("kolorek").style.backgroundColor =  "rgb(" + r + ", " + g + ", " + b + ")";
	document.getElementById("kolorek").style.borderColor = "black";
	document.getElementById("kred").style.backgroundColor = "white";
	document.getElementById("kgreen").style.backgroundColor = "white";
	document.getElementById("kblue").style.backgroundColor = "white";
	console.log(r);
	console.log(g);
	console.log(b);
}

document.getElementById("kolorek").addEventListener('click', losowanie())

document.getElementById("sub").addEventListener('click', function()
{
	rans = document.getElementById("r").value;
	gans = document.getElementById("g").value;
	bans = document.getElementById("b").value;
	document.getElementById("kolorek").style.borderColor =  "rgb(" + rans + ", " + gans + ", " + bans + ")";
	
	if(rans == r)
	{
		document.getElementById("kred").style.backgroundColor = "green";
	}
	else if(rans > r)
	{
		document.getElementById("kred").style.backgroundColor = "red";
	}
	else
	{
		document.getElementById("kred").style.backgroundColor = "blue";
	}
	
	if(gans == g)
	{
		document.getElementById("kgreen").style.backgroundColor = "green";
	}
	else if(gans > g)
	{
		document.getElementById("kgreen").style.backgroundColor = "red";
	}
	else
	{
		document.getElementById("kgreen").style.backgroundColor = "blue";
	}
	
	if(bans == b)
	{
		document.getElementById("kblue").style.backgroundColor = "green";
	}
	else if(bans > b)
	{
		document.getElementById("kblue").style.backgroundColor = "red";
	}
	else
	{
		document.getElementById("kblue").style.backgroundColor = "blue";
	}
	
	if(gans == g && bans == b && rans == r)
	{
		alert("SUPERRRR!!!");
		losowanie();
	}
})