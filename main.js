function showCardFooterAction() {
    const toottipElement  = document.getElementById('tooltip-element');
    const activeBtnElement = document.getElementById("btn-share");
    if(toottipElement.classList.contains('tooltip-active')) {
        toottipElement.classList.remove('tooltip-active')
        activeBtnElement.classList.remove('active-share')
    } else {
        toottipElement.classList.add('tooltip-active')
        activeBtnElement.classList.add('active-share')
    }
    
}

