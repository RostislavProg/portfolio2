const hoverSpace = document.querySelectorAll('.masters--cards__element'),
      textCard = document.querySelectorAll('.masters--text');

hoverSpace.forEach((e, i) => {
    e.addEventListener('mouseover', ()=>{
        textCard.forEach(elemnt => elemnt.id='');
        textCard[i].id = 'hoverText';
    });
    e.addEventListener('mouseout', ()=>{
        textCard.forEach(elemnt => elemnt.id='');
    });
});