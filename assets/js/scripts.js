$(document).ready(function(){
    //Mobile Menu
    $(".menu-icon").click(function(){
        $(".menu-items").slideToggle();
    });
    //Apps Carousel
    $(".apps-carousel").owlCarousel({
        nav : true,
        navText : ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'], 
        loop : true,
        dots : false,
        responsive : {
            0 : {
                items:1
            },
            480 : {
                items:2
            },
            768 : {
                items:4
            }
        }
        
        
    });
    // Mixitup 
    var mixer = mixitup('.gallery-items');

    // Magnific popup
    $('#popup').magnificPopup({
        type: 'image',
        delegate : "a",
        gllery : {
            enabled : true
        }
      });
});

const checkBox = document.querySelector(".check-box");
const proPrice = document.getElementById("price");
const monthly = document.getElementById("monthly");
checkBox.addEventListener("click", ()=> {
    if(checkBox.checked){
        proPrice.innerHTML="$20";
        monthly.innerHTML="Yearly";
    }
    else{
        proPrice.innerHTML="$9";
        monthly.innerHTML="Monthly";

    }
});
