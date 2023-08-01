function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");
  let plusminus = document.getElementById("btnChange");


  if (dots.style.display === "none") {
    dots.style.display = "inline";
    plusminus.innerHTML = "mais...";						
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    plusminus.innerHTML = "menos...";
    moreText.style.display = "inline";
   let}
    }

function myFunction1() {  
  let dots_1 = document.getElementById("dots1");
  let moreText_1 = document.getElementById("more1");
  let btnText_1 =document.getElementById("myBtn1");
  let plusminus_1 = document.getElementById("btnChange1");

  if (dots_1.style.display === "none") {
  dots_1.style.display = "inline";
  plusminus_1.innerHTML = "mais...";						
  moreText_1.style.display = "none";
  } else {
  dots_1.style.display = "none";
  plusminus_1.innerHTML = "menos...";
  moreText_1.style.display = "inline";
  }
}