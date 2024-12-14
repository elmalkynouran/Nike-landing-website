const scrollRevalOption = {
    distance: "50px",
    origin: "bottom",
    duration: 100,
};


ScrollReveal().reveal(".container .letter-k", {
    duration: 1000, // Animation duration for the letter
    delay: 1000,    // Delay before starting the letter animation
});


// Reveal the image after the letter animation
ScrollReveal().reveal(".container .img", {
    duration: 1000, // Animation duration for the image
    delay: 2000,    // Delay to ensure the letter animation completes
});
// Initialize ScrollReveal
const scrollRevealOption = {
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
};

// Reveal for the left text
ScrollReveal().reveal(".container .text_left", {
    ...scrollRevealOption, // Merge options with additional settings
    origin: "right",
    delay: 2000,
});

// Reveal for the right text
ScrollReveal().reveal(".container .text_right", {
    ...scrollRevealOption, // Merge options with additional settings
    origin: "left",
    delay: 2000,
});

ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500, 
});
ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 3500, 
});
ScrollReveal().reveal(".container .models", {
    duration: 1000,
    delay: 4000, 
});

ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000, 
});
ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000, 
});















