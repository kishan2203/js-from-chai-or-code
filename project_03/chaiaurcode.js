const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
//ye event method h jo bolta h ki koi method de do or kitne time k liye run krna h ye bta do 
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);//time yha milisecond m hota h 

