const display=document.querySelector("input"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
let chars ='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
 button.onclick=()=>{
   let i,
   randomPassword="";
   copyBtn.style.display = "block";
   copyActive.style.display = "none";
   for ( i = 0; i < 1; i++) {
     randomPassword = randomPassword + chars.charAt(
       Math.floor(Math.random() * chars.length)
     );
   }
   display.value = randomPassword;
 }
function copy() {
  copyBtn.style.display = "none";
  copyActive.style.display = "block";
  display.select();
  document.execCommand("copy");
}

$("span.far").click(function () {

  $(".alert").fadeIn(1000);
  $(".alert").fadeOut(1000);

})

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: '#00FFFF'
  
});
