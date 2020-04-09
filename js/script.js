function myFunction(x) {
    x.classList.toggle("change");
}



$(document).ready(function () {

    $('#slides').superslides({
        animation: 'slide',
        play: 5000,
        pagination: false
    });


    var typed = new Typed(".typed", {
        strings: ["UX Designer.", "Interaction Designer.", "UI Designer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: { // specifies no items displayed in particular screen size
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            738: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    // calls the js function easy pie chart


    var skillsTopOffset = $(".skillsSection").offset().top; // tells position of technical skills section
    // console.log(skillsTopOffset);
    $(window).scroll(function () { // scroll count - how far am i from the top of the document window
        // console.log(window.pageYOffset);
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 280) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: "#FF4F00",
                trackColor: false,
                scaleColor: false,
                lineWidth: 3,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
$(".items").isotope({
    filter:'*',
    animationOptions:{
        duration: 1500,
        casing:'linear',
        queue: false
        
    }
    
})

});