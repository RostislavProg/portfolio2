//Cards

const hoverSpace = document.querySelectorAll('.services--cards__element'),
      textCard = document.querySelectorAll('.services--cards__text');

hoverSpace.forEach((e, i) => {
    e.addEventListener('mouseover', ()=>{
        textCard.forEach(elemnt => elemnt.id='');
        textCard[i].id = 'hoverText';
    });
    e.addEventListener('mouseout', ()=>{
        textCard.forEach(elemnt => elemnt.id='');
    });
});

//Works

const hideDiv = document.querySelector('.works--imgs__hide'),
      anotherDiv = document.querySelector('.works--imgs div'),
      allImages = document.querySelectorAll('.works--imgs div img'),
      activeClickedLink = document.querySelectorAll('.works--nav .active'),
      clickedLink = document.querySelectorAll('.works--nav span');

clickedLink.forEach((e) =>{
    e.addEventListener('click', ()=>{
        clickedLink.forEach((element)=>{element.className = 'none';});
        e.className = 'active';
        if(`${e.getAttribute('alt')}` != 'allImages'){
            anotherDiv.style.display = 'none';
            hideDiv.style.display = 'flex';
            while(hideDiv.firstChild){
                hideDiv.removeChild(hideDiv.firstChild);
            }
            allImages.forEach((element)=>{
                if(element.getAttribute('alt') == e.getAttribute('alt')){
                    hideDiv.appendChild(element);
                }
            });
        }else{
            allImages.forEach((element)=>{
                anotherDiv.appendChild(element);
            });
            hideDiv.style.display = 'none';
            anotherDiv.style.display = 'flex';
        }
    });
});