let button=document.querySelectorAll('button');
let paragraph=document.querySelectorAll("p");

button.forEach(function(buttons) {
        buttons.addEventListener("click", (show)=>{});
});

button[0].onclick=(show)=>{
        if(paragraph[0].hidden===true){
            paragraph[0].hidden=false;
            button[0].className="minus";
        }else{
            paragraph[0].hidden=true;
            button[0].className="plus";
        }
}
button[1].onclick=(show)=>{
    if(paragraph[1].hidden===true){
        paragraph[1].hidden=false;
        button[1].className="minus";
    }else{
        paragraph[1].hidden=true;
        button[1].className="plus";
    }
}
button[2].onclick=(show)=>{
    if(paragraph[2].hidden===true){
        paragraph[2].hidden=false;
        button[2].className="minus";
    }else{
        paragraph[2].hidden=true;
        button[2].className="plus";
    }
}
button[3].onclick=(show)=>{
    if(paragraph[3].hidden===true){
        paragraph[3].hidden=false;
        button[3].className="minus";
    }else{
        paragraph[3].hidden=true;
        button[3].className="plus";
    }
}