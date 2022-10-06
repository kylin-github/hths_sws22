var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


$(function() {
  new Slider({
      images: '.slider-1 img',
      btnPrev: '.slider-1 .buttons .prev',
      btnNext: '.slider-1 .buttons .next',
      auto: false
  });

new Slider({
      images: '.slider-2 img',
      btnPrev: '.slider-2 .buttons .prev',
      btnNext: '.slider-2 .buttons .next',
      auto: true,
      rate: 2000
  });
});

function Slider(obj) {
	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
     this.rate = obj.rate || 1000;

	var i = 0;
     var slider = this;

    // The "Previous" button: to remove the class .shown, to show the previous image and to add the .shown class
	this.prev = function () {
		slider.images.eq(i).removeClass('shown');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images.eq(i).addClass('shown');
	}

    // The "Next" button: to remove the class .shown, to show the next image and to add the .shown class
	this.next = function () {
		slider.images.eq(i).removeClass('shown');
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images.eq(i).addClass('shown');
	}

    // To add next and prev functions when clicking on the corresponding buttons
    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

    // For the automatic slider: this method calls the next function at the set rate
	if (slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
  };
// $(document).ready(function(){
//   // $('.parallax').parallax(); // image parallax
//   // $(".dropdown-trigger").dropdown(); // navbar dropdown
//   $('.carousel').carousel(); // carousel
// });

var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); // get elements to apply animation to

// show image if it's in viewport, hide otherwise
function loop () {
    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) { 
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();

            


    