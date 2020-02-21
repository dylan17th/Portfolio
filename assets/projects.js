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
function cardCreator(image, name, link, descript, anchorText){
    //creating elements for the component and giving classes to elements 
    const card = document.createElement('div');
    card.classList.add('container');
    const img = document.createElement('img');
    img.classList.add('picture')
    const title = document.createElement('h2');
    const button = document.createElement('div');
    button.classList.add('button');
    const anchor = document.createElement('a');
    const divDe = document.createElement('div');
    const buttonDe = document.createElement('div');
    const textDiv = document.createElement('div')
    const description = document.createElement('p');
    description.classList.add('hide');
    


    //appending children into the card
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(divDe);
    divDe.appendChild(textDiv);
    divDe.appendChild(buttonDe);
    card.appendChild(description);
    card.appendChild(button);
    button.appendChild(anchor);


    //apply text content to the elements 
    title.textContent = name; 
    img.src = image;
    anchor.href = link;
    anchor.textContent = anchorText;
    description.textContent = descript;
    textDiv.textContent = "Description";
    buttonDe.textContent ='\u25BC';
    
    //changing some style for divDe
    textDiv.style.display= 'inline-block';
    textDiv.style.margin = '1rem';
    buttonDe.style.display = 'inline-block';

    //adding event listeners
    card.addEventListener('mousemove', ()=>{
        card.style.transform = 'scale(1.05)'
        card.style.transition= '.3s';
    })
    card.addEventListener('mouseleave', ()=>{
        card.style.transform = 'scale(1.0)';
        card.style.transition= '.3s';
    })
    button.addEventListener('mousemove', ()=>{
        button.style.transform = 'scale(1.1)';
        button.style.transition= '.3s';
    })
    button.addEventListener('mouseleave', ()=>{
        button.style.transform = 'scale(1.0)';
        button.style.transition= '.3s';
    })

    buttonDe.addEventListener('mousemove', ()=>{
        buttonDe.style.transform = 'scale(1.4)';
        buttonDe.style.transition= '.3s';
    })
    buttonDe.addEventListener('mouseleave', ()=>{
        buttonDe.style.transform = 'scale(1.0)';
        buttonDe.style.transition= '.3s';
    })
    buttonDe.addEventListener('click', ()=>{
       description.classList.toggle('open')
    })
    buttonDe.addEventListener('click', ()=>{
        
    })

    return card
}

//making a list component for the description section

//getting the body class and making a variable for the entry point
const entry = document.querySelector('.body2');

//appending the card creator function to the body class
entry.appendChild(cardCreator( '../images/planet-planners.png','Planet Planners','https://planetplanners.netlify.com/', 'This website was developed by 8 full stack web developers, including myself. We where all assigned to work on a particular portion of the website during our build week at Lambda. It was my job to design, create and format the marketing pages. It was my job to come up with a simple, but elegant design for the website because my group was without a UX designer. I developed the home and about page for the website. This was my first Project working with HTML, CSS and the preprocessor less.','View Website'));

entry.appendChild(cardCreator( '../images/react-wars.png','React Wars', 'https://github.com/dylan17th/Sprint-Challenge-React-Wars','The goal of the assignment was to fetch a list of Star Wars characters from the Star Wars API (or SWAPI) and render the data to the screen. I accomplised this task in React using the axios libaray to fetch my data from the API. Additionally, It was my job to implement styled components to each card and make the rendered data look presentable.','View Repository'));

entry.appendChild(cardCreator( '../images/lambda-Times.png','Lamba Times','https://github.com/dylan17th/Sprint-Challenge-Applied-Javascript', 'The Goal of this assignment was to create a Lambda Newspaper. It was my job to create the components that make up the newspapers home page using vanilla javascript. I was instructed first to make the page with static data, then asked to request data from a server to create dynamic components.','View Repository'));

entry.appendChild(cardCreator( '../images/github.png',"Github Username Cards",'https://github.com/dylan17th/github-usercard', 'The goal of this assignment was to access the GitHub API and building a social card based on the data that was returned. I was instucted to create a component based on the data I got from my GET request to the GitHub API','View Repository'));