const getElement=(selector)=>{
  const element=document.querySelector(selector)
  if(element) return element
  throw Error(
    `Please double check your class names,there is${selector} class`
  )
}


const navToggle =getElement (".nav-links");
const navbtnDOM = getElement(".nav-btn");

navbtnDOM.addEventListener("click", ()=> {
 
  navToggle.classList.toggle("show-links");
});


// date & time
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a=new Date();
    date=a.toLocaleDateString(undefined,options);
    //time is string 
    time=a.getHours() + ':' +a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML =time + " " + date;
},1000); 