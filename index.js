/*template_b092nis
service_odlw5qa
Ct4F70saHQAfn8zAy*/
let isModelOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event){  
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;   
    const y = event.clientY * scaleFactor;   

    for(let i=0; i<shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme");
    }
    
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.model__overlay--loading');
    const success = document.querySelector('.model__overlay--success'); 
    emailjs
    .sendForm(
        'service_odlw5qa',
        'template_b092nis',
      event.target,
    'Ct4F70saHQAfn8zAy'
    ).then(() => {
        loading.classList.remove("model__overlay--visible");
        success.classList += " model__overlay--visible";
        loading.classList += " model__overlay--visible"
        
    }) .catch(() => {
        loading.classList.remove("model__overlay--visible");
        alert("Failed to send email. Please contact me directly at: gracetilley678@gmail.com");

    })

}

function toggleModel(){
    
    if(isModelOpen){
        isModelOpen = false;
        return document.body.classList.remove("model__open");
    }
    isModelOpen = true;
    document.body.classList += (" model__open");  

}
