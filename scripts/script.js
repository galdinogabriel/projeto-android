function changeSize(){
    if(window.innerWidth>= 992){
        menu__nav.style.display='block';
    }else{
        menu__nav.style.display = 'none'
    }
}



function clickMenu(){
    if(menu__nav.style.display == 'block'){
        menu__nav.style.display = 'none'
    }else{
        menu__nav.style.display='block';
    }
    
}