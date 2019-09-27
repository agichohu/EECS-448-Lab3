var index = 1


function goRight(n)
{
    show(index+=n)
}

goLeft = function(n)
{
    show(index-=n)
}

currentSlide = function(n)
{
    show(index = n)
}

show = function(n)
{
    console.log("show called")
    var i =0;
    var slides = document.getElementsByClassName("slide")
    if(n>slides.length)
    {
        index = 1;
    }
    if(n<1)
    {
        index=slide.length;
    }
    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[index-1].style.display = "block";
}