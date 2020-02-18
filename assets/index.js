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

//creating variable of div element to insert my button into 
const container = document.querySelector('.body')

//creating a buttton component 
function buttonCreator (text, url){
    const button = document.createElement('div');
    const anchor = document.createElement('a');
    button.classList.add('projects-button');
    const span = document.createElement('span');
    span.classList.add('transparent');
    button.appendChild(anchor);
    anchor.appendChild(span);
    span.textContent = text; 
    anchor.href = url;
    anchor.style.textDecoration = "none";
    button.style.opacity= '.8'

    button.addEventListener('mouseover', ()=> {
        button.style.transform = 'scale(1.3)'; 
        button.style.transition = 'transform .5s';
        button.style.opacity = '5';
    })

    button.addEventListener('mouseleave', ()=> {
        button.style.transform = 'scale(1.0)';
        button.style.opacity = '.8';
    })
    return button
}

//appending child to the the body class 
container.appendChild(buttonCreator('View Projects','../projects.html'));

//creating a variable for thw image element
const image = document.querySelector('.dylan');

//adding an eventlistener for the image for when the mouse goes over
image.addEventListener('mouseover', ()=> {
    image.style.opacity = '1';
    image.style.transform= 'scale(1.2)';
    image.style.transition= '.3s';
})

//adding an eventlistener for the image for when the mouse leaves 
image.addEventListener('mouseleave', ()=> {
    image.style.opacity = '.8';
    image.style.transform= 'scale(1.0)';
    image.style.transition= '.3s';
})
