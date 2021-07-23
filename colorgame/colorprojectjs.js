function randomcolor()
{
	var r= Math.floor(Math.random()*256);
		var g= Math.floor(Math.random()*256);
			var b= Math.floor(Math.random()*256);

  return "rgb(" + r +", " + g +", "+ b+ ")";
}
function getcolors()
{
	var arr=[];
	for (var i=0;i<6;i++)
	{
		arr.push(randomcolor());
	}
 return arr; 
}
var arr =getcolors()
var squares = document.querySelectorAll(".square");
var messagedisplay=document.querySelector("#message");
var pa = document.querySelector("p");
var pickedcolor=arr[Math.floor((Math.random()*6+1))];
var h = document.querySelector("h2");
h.innerHTML=pickedcolor; 
for(var j=0;j<squares.length;j++)
{
	squares[j].style.background=arr[j];
	squares[j].addEventListener("click",function(){
		var clickedcolor=this.style.background;

		if(clickedcolor===pickedcolor)
		{
			
			for(var k=0;k<squares.length;k++)
			{
				squares[k].style.background=clickedcolor;
			}
			
			pa.innerHTML="CONGRATS YOU ARE RIGHT!";
		}
		else {
			this.style.background="#232323";
			alert("TRY AGAIN");

		}

	});
}
