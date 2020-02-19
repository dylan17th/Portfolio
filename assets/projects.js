//creating a variable for the anchor elements 
const anchorTags = document.querySelectorAll('a');

//looping through the anchor elements so they underline/upscale when the mouse goes over them
anchorTags.forEach( item => item.addEventListener('mouseover', function (){
 item.style.textDecoration = 'underline';
 item.style.transform = 'scale(1.3)';
 item.style.transition = 'transform .3s';
}))

//looping back over the elements to take off the text decoration/descale when the mouse leaves
anchorTags.forEach( item => item.addEventListener('mouseleave', function (){
    item.style.textDecoration = 'none';
    item.style.transform = 'scale(1.0)';
    item.style.transition = 'transform .3s';
}))

//creating a component for the projects 
// function cardCreator(image, name, link, description){
//     //creating elements for the component and giving classes to elements 
//     const card = document.createElement('div');
//     card.classList.add('container');
//     const img = document.createElement('img');
//     const title = document.createElement('h2');
//     const button = document.createElement('div');
//     button.classList.add('button');
//     const anchor = document.createElement('a');
//     const description = document.createElement('p');

//     //appending children into the card
//     card.appendChild();
//     card.appendChild();
//     card.appendChild();
//     card.appendChild();




// return card
// }