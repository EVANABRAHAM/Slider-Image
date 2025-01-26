let slideIndex = 0;
showSlides();

function showSlides() {
    const items = document.querySelectorAll('.item');
    
    // Hide all slides
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none"; // Set display to none for all items
    }
    
    // Increment the slide index
    slideIndex++;
    if (slideIndex > items.length) {
        slideIndex = 1; // Reset to the first slide if at the end
    }
    
    // Display the current slide
    items[slideIndex - 1].style.display = "block";
    
    // Set a timer to call this function every 3 seconds
    setTimeout(showSlides, 3000); // Change slides every 3 seconds
}
