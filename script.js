navDialog = document.getElementById('nav-dialog')
function handleMenu(){
    navDialog.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;
function setupIntersectionObserver(element,isLTR,speed){
    const intersectionCallback = (entries) =>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.addEventListener('scroll',scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
    
    function scrollHandler (){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)* speed;
        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
        
    }
}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,true,0.8);


const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element=> {
    element.addEventListener('click',()=>{
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrow = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrow.classList.toggle('-rotate-180');
    })
})



// pricing

const monthlyButton = document.getElementById('monthly');
const yearlyButton = document.getElementById('yearly');
const slider = document.querySelector('.slider');

const essentialPrice = document.querySelector('.essential-price');
const professionalPrice = document.querySelector('.professional-price');

// Prices for both plans
const monthlyPrices = {
    essential: "$120",
    professional: "$300"
};

const yearlyPrices = {
    essential: "$100",
    professional: "$240"
};

// Event listener for Monthly Plan
monthlyButton.addEventListener('click', () => {
    monthlyButton.classList.add('active');
    yearlyButton.classList.remove('active');

    // Slide the slider to the left (start)
    slider.style.transform = 'translateX(0)';

    // Change prices to monthly
    essentialPrice.textContent = monthlyPrices.essential;
    professionalPrice.textContent = monthlyPrices.professional;
});

// Event listener for Yearly Plan
yearlyButton.addEventListener('click', () => {
    yearlyButton.classList.add('active');
    monthlyButton.classList.remove('active');

    // Slide the slider to the right (end)
    slider.style.transform = 'translateX(100%)';

    // Change prices to yearly
    essentialPrice.textContent = yearlyPrices.essential;
    professionalPrice.textContent = yearlyPrices.professional;
});
