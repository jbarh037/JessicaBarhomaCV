// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//document.getElementById("about_btn").addEventListener("click", scrollFunction());

// setting background image to screen height
document.querySelector(".backgroundImage").style.height = $(window).height() + 'px';

window.onscroll = function () { myFunction()};

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
var txt = 'TECHNICAL SKILLS';
var speed = 100;
var skillsTxtOn = false;
var arr = ["<","div","class","=","'Languages'",">"];
let HTMLCollectionSpans = document.getElementsByClassName('css-typing');
var spanIndex = 0;
var charIndex = 0;

function typing() {
    if (j < HTMLCollectionSpans.length) {
        for (var x = 0; x < arr[j].length; x++) {
            //setTimeout(function () {
            var s = getChar(j, x);
                HTMLCollectionSpans[j].innerHTML += s;
                console.log(arr[j] + ", " + s);
           // }, 50);          
        }
        j++;
        setTimeout(typing,speed);
    }
}

function getChar(j,x) {
   // console.log(arr[j].charAt(x));
    return arr[j].charAt(x);
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
                setTimeout(typeWriter, speed*10);
            }
            else {
                charIndex = 0;
                spanIndex++;
            } 
            setTimeout(typeWriter, speed);
        }
    }
}

//function typeWriter2() {
//    var arr = {
//        txt1: "<",
//        txt2: "div ",
//        txt3: "class ",
//        txt4: "= ",
//        txt5: "'Languages'",
//        txt6: ">"
//    }
//    nextWord(arr);
//}
//function nextWord(arr) {
//    for (var key in arr) {
//        typing(key, arr[key], 0);
//    }
//}
//function typing(k, val, j) {
//    if (j < val.length) {
//        document.querySelector("." + k).innerHTML += val.charAt(j);
//        j++;
//        setTimeout(function () {
//            typing(k, val, j);
//        }, 200);
//    }
//}




$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom < viewportBottom && elementTop > viewportTop;
};

$(window).on('resize scroll', function () {
    $('#skills').each(function () {
        if (!skillsTxtOn && $(this).isInViewport()) {
            typeWriter();
            skillsTxtOn = true;
        }
    });
});


/*(function () {
    $('#carousel-item').carousel({
        interval: 4000
    });
}());

(function () {
    $('.carousel-multiItem  .item').each(function () {
        var itemToClone = $(this);
        for (var i = 1; i < 3; i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));

            $(".carousel-multiItem ").find(".item").css("transition", "   500ms ease-in-out all  ").css("transition", "  500ms ease-in-out all").css("backface-visibility", "visible").css("transform", "none!important")

        }
    });
}());*/

