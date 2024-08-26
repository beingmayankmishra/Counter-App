const countervalue = document.querySelector('#counter');

const increment=()=>{
  
    //get value from ui
    let value= parseInt(countervalue.innerText);

    value=value+1;

    //set the value  into ui
    countervalue.innerText=value;

};


const decrement=()=>{

    let value= parseInt(countervalue.innerText);

    value=value-1;
    countervalue.innerText=value;

};