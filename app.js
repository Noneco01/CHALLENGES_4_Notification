let unRead = document.querySelectorAll(".unread");
let redDot = document.querySelectorAll(".red-dot");
let num = document.querySelector(".num3");

console.log(unRead);

let count = 3;

//function read all mark
function readAll(){
    
    
    for(let i = 0;i < unRead.length;i++){
        unRead[i].setAttribute("class","read");
        redDot[i].classList.remove("red-dot");
    }
    
    count = 0;
    num.innerHTML = count;
    
}

// for(let i = 0 ; i < unRead.length; i++){
        
//     unRead[i].addEventListener('click',read);

// }



// cheak read each 1 time
function read1(){
    
    if(count > 0){
        
        unRead[0].setAttribute("class","read");
        redDot[0].classList.remove("red-dot");        
        
        --count;
        num.innerHTML = count;
    }
     
}

function read2(){
    
    if(count > 0){
        
        unRead[1].setAttribute("class","read");
        redDot[1].classList.remove("red-dot");        
        
        --count;
        num.innerHTML = count;
    }
     
}

function read3(){
    
    if(count > 0){
        
        unRead[2].setAttribute("class","read");
        redDot[2].classList.remove("red-dot");        
        
        --count;
        num.innerHTML = count;
    }
     
}



