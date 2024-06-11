let buttons=document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click",()=>{
        if(!button.previousElementSibling.classList.contains('hiddenAnswer')){
            button.previousElementSibling.classList.add('hiddenAnswer')
            button.classList.remove('minus')
            button.classList.add('plus')
        }else{
                button.previousElementSibling.classList.remove('hiddenAnswer')
                button.classList.remove('plus')
                button.classList.add('minus')
        }
    })
})