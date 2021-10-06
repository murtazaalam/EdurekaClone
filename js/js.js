// var translateCourseCard = -570;
// var translateCareerCard = -570;
// function rightSlide(button){
//     var buttonId = button.id.trim();
//     var cardId = document.getElementById("draggable-course-card0");
//     var rect = cardId.getBoundingClientRect();
//     var position = parseInt(rect.x);
//     var displayButton = "none";
//     position != 111 ? displayButton = "d-block" : displayButton = "d-none";
//     document.getElementById("trending-courses-previous").classList.add(displayButton.trim());
//     console.log(displayButton);
//     console.log(parseInt(rect.x));

//     if(buttonId == "trending-courses-next"){
        
//         for(let i = 0; i < 4; i++){
//             document.getElementById("draggable-course-card"+i).style.transform = "translate("+translateCourseCard+"px"+",0)";
//         }
//         translateCourseCard = 0;
//     }
//     else if(buttonId == "career-related-next"){
//         for(let i = 0; i < 3; i++){
//             document.getElementById("draggable-career-card"+i).style.transform = "translate("+translateCareerCard+"px"+",0)";
//         }
//         translateCareerCard = -1140;
//     }
//     else if(buttonId == "recent-additions-next"){
//         for(let i = 0; i < 3; i++){
//             document.getElementById("draggable-recent-card"+i).style.transform = "translate("+translateCareerCard+"px"+",0)";
//         }
//     }
    
// }
// function leftSlide(button){
//     var buttonId = button.id.trim();
//     if(buttonId == "trending-courses-previous"){
//         for(let i = 0; i < 4; i++){
//             document.getElementById("draggable-course-card"+i).style.transform = "translate(0px,0)";
//         }
//     }
//     else if(buttonId == "career-related-previous"){
//         for(let i = 0; i < 3; i++){
//             document.getElementById("draggable-career-card"+i).style.transform = "translate(0px,0)";
//         }
//     }
//     else if(buttonId == "recent-additions-previous"){
//         for(let i = 0; i < 3; i++){
//             document.getElementById("draggable-recent-card"+i).style.transform = "translate(0px,0)";
//         }
//     }
    
// }
var slideIndex = 1;
showSlides(slideIndex);

function slide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("four-card");
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none";  
      document.getElementById("draggable-course-card"+i).style.transform = "translate(-570px,0)";
  }
  
}
var boxWidth = 524;
function decreaseWidth() {
  if(window.innerWidth < 576){

    document.getElementById("review-box0").style.width = boxWidth+"px"+" !important;";
    console.log(document.getElementById("review-box0"));
    console.log(window.innerWidth);
  }
  boxWidth = boxWidth - 1;
}
window.onresize = decreaseWidth;
decreaseWidth();