var index = 1


goRight = function(n)
{
    show(index+=n)
}

goLeft = function(n)
{
    show(index-=n)
}

show = function(n)
{
    var i =0;
    var slides = document.getElementsByClassName("slide")
    var dot = document.getElementsByClassName("dot")
    if(n>slides.length)
    {
        index = 1;
    }
    if(n<1)
    {
        index=slide.length;
    }
}