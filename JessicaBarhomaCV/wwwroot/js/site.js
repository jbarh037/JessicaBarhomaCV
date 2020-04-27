// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//document.getElementById("about_btn").addEventListener("click", scrollFunction());

// setting background image to screen height
//document.querySelector(".navbar").style.width = $(window).width() + 'px';


document.querySelector(".backgroundImage").style.height = $(window).height() + 'px';

$('.envelope').tooltip('enable');


window.addEventListener("resize", reziseFunction);
function reziseFunction() {
    document.querySelector("nav").style.width = $(window).width() + 'px';
}



//Hamburger menu toggle
$(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    if ($(".navbar-toggle").is(":visible")) {
        $(".navbar-collapse").collapse('hide');
    }
});


window.onscroll = function () { myFunction() };

function myFunction() {
    var backImage = document.querySelector(".backgroundImage");
    var a = document.querySelector(".navbar");
    var x = (backImage.scrollHeight - a.scrollHeight);

    if (window.scrollY > x) {
        a.classList.add("navbarDark");
    }
    else {
        a.classList.remove("navbarDark");
    }
}

/* skills typewriter - START */
var i = 0;
var j = 0;
var x = 0;
var txt = 'TECHNICAL SKILLS';
var speed = 100;
var skillsTxtOn = false;
var arr = ["<","section","class","=","'Languages'","/>"];
let HTMLCollectionSpans = document.getElementsByClassName('css-typing');
var arr2 = ["<", "section", "class", "=", "'tools & platforms'", "/>"];
let HTMLCollectionSpans2 = document.getElementsByClassName('css-typing2');
var spanIndex = 0;
var charIndex = 0;

function typing() {
    if (j < HTMLCollectionSpans2.length) {
        if (x < arr2[j].length) {
            console.log(arr2[j] + ", " + arr2[j].charAt(x));
            HTMLCollectionSpans2[j].innerHTML += arr2[j].charAt(x++);
            //charIndex++;
            setTimeout(typing, speed);
        }
        else {
            x = 0;
            j++;
        }
        setTimeout(typing, speed*10);
    }
    //if (j < HTMLCollectionSpans2.length) {
    //    for (var x = 0; x < arr2[j].length; x++) {
    //        //setTimeout(function () {
    //        var s = arr2[j].charAt(x);
    //            HTMLCollectionSpans2[j].innerHTML += s;
    //            console.log(arr2[j] + ", " + s);
    //       // }, 50);          
    //    }
    //    j++;
    //    setTimeout(typing,speed*100);
    //}
}

function getChar(j,x) {
   // console.log(arr[j].charAt(x));
    return arr2[j].charAt(x);
}

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".console").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        if (spanIndex < HTMLCollectionSpans.length) {
            if (charIndex < arr[spanIndex].length) {
                console.log(arr[spanIndex] + ", " + arr[spanIndex].charAt(charIndex));
                HTMLCollectionSpans[spanIndex].innerHTML += arr[spanIndex].charAt(charIndex++);
                //charIndex++;
                setTimeout(typeWriter, speed * 10);
            }
            else {
                charIndex = 0;
                spanIndex++;
            }
            setTimeout(typeWriter, speed);
        } else
            setTimeout(typing(), speed * 2);
    }
}


$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom < viewportBottom && elementTop > viewportTop;
};

$(window).on('resize scroll', function () {
    $('.techSkills-left').each(function () {
        if (!skillsTxtOn && $(this).isInViewport()) {
            typeWriter();
            skillsTxtOn = true;
        }
    });
});

