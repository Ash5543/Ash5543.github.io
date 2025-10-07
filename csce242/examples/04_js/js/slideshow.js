setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide){ //next slide is null
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");


},1000);//first param is action, second is how often function calls in millisec

//queryselector gives first element that matches, queryselectorall gives array list