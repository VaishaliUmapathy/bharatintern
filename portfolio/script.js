document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav-link a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetSectionId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            // Scroll to the target section with smooth scrolling
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Optionally, you can adjust the scroll position if needed
            // targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        });
    });
});
