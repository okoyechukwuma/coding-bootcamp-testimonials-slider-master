const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let index = 0;

prev.addEventListener("click",function(){
    prevSlide();
})

next.addEventListener("click",function(){
   nextSlide(); 
})

function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
  if(index==slides.length-1){
      index=0;
  }
  else{
      index++;
  }
  changeSlide();
}

function changeSlide(){
          for(let i=0; i<slides.length; i++){
               slides[i].classList.remove("active");
          }

   slides[index].classList.add("active");
}

// const nextSlide = () => {
//     // Get current class
//     const current = document.querySelector('.active');
//     // Remove current class
//     current.classList.remove('active');
//     // Check for next slide
//     if (current.nextElementSibling) {
//       // Add current to next sibling
//       current.nextElementSibling.classList.add('active');
//     } else {
//       // Add current to start
//       slides[0].classList.add('active');
//     }
//   };

//   const prevSlide = () => {
//     // Get current class
//     const current = document.querySelector('.active');
//     // Remove current class
//     current.classList.remove('active');
//     // Check for prev slide
//     if (current.previousElementSibling) {
//       // Add current to prev sibling
//       current.previousElementSibling.classList.add('active');
//     } else {
//       // Add current to last
//       slides[slides.length - 1].classList.add('active');
//     }
//   };
  
//   // Button events
//   next.addEventListener('click', () => {
//     nextSlide();
//     // if (auto) {
//     //   clearInterval(slideInterval);
//     //   slideInterval = setInterval(nextSlide, intervalTime);
//     // }
//   });
  
//   prev.addEventListener('click', () => {
//     prevSlide();
//     // if (auto) {
//     //   clearInterval(slideInterval);
//     //   slideInterval = setInterval(nextSlide, intervalTime);
//     // }
//   });
  
// // console.log(slide);