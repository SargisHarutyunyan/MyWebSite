var img_right = new Array("bmw.jpg","merc.jpg","shelby.jpg","lamborghini.jpg","ferrari.jpg","bmw45.jpg");
			var img_left =  new Array("bmw.jpg","bmw45.jpg","ferrari.jpg","lamborghini.jpg","shelby.jpg","merc.jpg");
			
			var i = 0 ;
			function f() {
			
			document.getElementById("big-photo").src="Img/" + img_right[i];
			i++;
			setTimeout("f()", 4000);
			if (i == 6) i = 0;
			}
		
			
			var i = 0 ;
			function right() {
			
			document.getElementById("big-photo").src="Img/" + img_right[i];
			i++;
		
			if (i == 6) i = 0;
			}
			
			function left() {
			
			document.getElementById("big-photo").src="Img/" + img_left[i];
			i++;
			if (i == 6) i = 0;
			}
			
			function mouseover1() {
			
			document.getElementById("big-photo").src="Img/" + img_right[0];
			
			}
			
			function mouseover2() {
			
			document.getElementById("big-photo").src="Img/" + img_right[1];
			
			}
			function mouseover3() {
			
			document.getElementById("big-photo").src="Img/" + img_right[2];
			
			}
			function mouseover4() {
			
			document.getElementById("big-photo").src="Img/" + img_right[3];
			
			}
			function mouseover5() {
			
			document.getElementById("big-photo").src="Img/" + img_right[4];
			
			}
			function mouseover6() {
			
			document.getElementById("big-photo").src="Img/" + img_right[5];
			
			}
			