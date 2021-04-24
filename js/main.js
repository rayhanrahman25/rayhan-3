$(document).ready(function(){
    // isotope start
    let $btns = $('.gallery-area .button-group button');
    $btns.click(function(e){
        $('.gallery-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr("data-filter");
        $('.gallery-area .grid').isotope({
            filter:selector
        });
        return false
    })
    // isotope end
    // this for page suffle layout
    $('#btn-all').trigger('click');
    // this for popup plugin
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true} 
      });

    //  Owl carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
    0:{
        items: 1
    },
    544:{
items: 2
    }
        }
    }) 
});