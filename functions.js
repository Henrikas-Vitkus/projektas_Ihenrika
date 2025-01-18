window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    let text1Height = document.querySelector('.text1').offsetHeight;
    let image1 = document.getElementById('parallaxImage');

    let container1Top = document.querySelector('.container1').getBoundingClientRect().top;

    // If the user has scrolled past the text content
    if (scrollPosition >= (container1Top + text1Height)) {
        image1.style.position = 'absolute'; // Let the image scroll with the content
        image1.style.top = `${text1Height}px`; // Keep it at the bottom of the text
    } else {
        image1.style.position = 'fixed'; // Keep the image fixed in place
        image1.style.top = '0px'; // Keep it at the top
    }
});