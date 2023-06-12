
        document.addEventListener("DOMContentLoaded", function() {
            const navLinks = document.querySelectorAll(".nav-link");
    
            navLinks.forEach(function(link) {
                link.addEventListener("click", function(event) {
                    event.preventDefault();
    
                    const target = document.querySelector(this.getAttribute("href"));
    
                    if (target) {
                        target.scrollIntoView({
                            behavior: "smooth",
                        });
                    }
                });
            });
        });
    


    const dynamicContent = document.getElementById("dynamic-content");

    function showMoreContent() {
        // Create the content to be displayed
        const additionalContent = document.createElement("p");
        additionalContent.textContent = "Our team of skilled professionals specializes in UX/UI design, ensuring that your website or application provides an intuitive and engaging user experience. We can assist you with creating seamless and visually stunning interfaces that enhance user satisfaction and drive conversions.";
    
        // Append the content to the dynamicContent container
        dynamicContent.appendChild(additionalContent);
    }
    
    // Attach an event listener to the button
    const showMoreButton = document.getElementById("show-more-btn");
    showMoreButton.addEventListener("click", showMoreContent);
    

