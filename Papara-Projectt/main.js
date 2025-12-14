//new Promise((resolve, reject) =>{
    //setTimeout(() =>{
        //document.getElementById("manibox1").style.visibility = "visible"
        //resolve();
    //}, 1000)
//}).then(() => {
    //return new Promise((resolve) => {
       // setTimeout(() =>{
            //document.getElementById("manibox2").style.visibility = "visible"
            //resolve();
       // }, 1000)
   // })
//}).then(() => {
   // return new Promise((resolve) =>{
       // setTimeout(() => {
        //    document.getElementById("manibox3").style.visibility = "visible"
       //     resolve();
   //    // }, 1000)
   // })
//}).then(() => {
    //setTimeout(() => {
        //document.getElementById("manibox4").style.visibility = "visible"
   // }, 1000)
//})








document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  function showOnScroll() {
    hiddenElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', showOnScroll);
  showOnScroll(); // لتفعيل العناصر الظاهرة من البداية
});