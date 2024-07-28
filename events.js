//change in state of object is events
//is me node.event se event handling hoti ha 
// like btn.onclick 
let btn1=document.querySelector(".btn11");
btn1.onclick=()=>{
    console.log("hey");
    a=23;
    console.log(a);
};
//let box1=document.querySelector("box");
//box1.onmouseover=()=>{
    //console.log("print div inside ");
//};
//agar inline or js donojaga event handle horha ha to javascrispt wale ko prefer kia jata ha
//dono same nodes par event handling laagai ha to dosre wala run hoga wo first ko override krdega
//event object k pass sari info hoti ha events ki

let btn3=document.querySelector("#btn2");
btn3.onclick=(e)=>{
console.log(e);
console.log(e.type);//event ka type batae  ga
console.log(e.target); 

}
//nline se html code bulky hojata ha or js me likhne se sirf ik bar karsakte ha thats why we use event listhner
//event listerner
//node.addeventlistner(event,callback)
//callback is event handler
let p1=document.querySelector("p");
p1.addEventListener('click',()=>
{
    console.log("hey");
});
p1.addEventListener('click',()=>
{
    console.log("hey1");
});//same event se miltiple kam karwa sakte ha
p1.removeEventListener('click',()=>
{
    console.log("hey");
});
//is event ne memory me jaga bna li ha to isko remove krne k liye bhi code likhna pare ga
//callback referce same hona chaiye
//toggle button clik once se dark mode hojae or double click se light mode
let toggle=document.querySelector(".press");
let currentmode='light';
let body=document.querySelector("body");

toggle.addEventListener('click',()=>
{ if (currentmode=='light'){
    currentmode='dark';
    //document.querySelector("body").style.backgroundColor="black"; aese bhi karsakte
    body.classList.add('dark');
}else{
    currentmode='light';
   // document.querySelector("body").style.backgroundColor="pink"; aese bhi karsakte
 body.classList.add('light');
}
console.log(currentmode);
});

let d1=document.querySelector(".d1");
d1.addEventListener('mouseover',()=>
{
    document.querySelector(".d1").style.backgroundColor="red";//div par mouse le jane se color red hoga
})





