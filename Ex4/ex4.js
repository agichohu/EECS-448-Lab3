changer = function()
{
    console.log("it runs")
    br = document.getElementById("borderRed").value
    bg = document.getElementById("borderGreen").value
    bb = document.getElementById("borderBlue").value

    bw = document.getElementById("borderWidth").value
   

    bgr = document.getElementById("backgroundRed").value
    console.log("background red val", bgr)
    bgg = document.getElementById("backgroundGreen").value
    console.log("background green", bgg)
    bgb = document.getElementById("backGroundBlue").value
    console.log("background blue", bgb);
   

    // backgroundDiv = document.getElementById("content")
    // console.log("background div", backgroundDiv)

    document.getElementById("content").style.border.width = bw + "dotted" + 'rgb(' + [br,bg,bb].join(',') + ')';

    document.getElementById("content").style.border.color = 'rgb(' + [br,bg,bb].join(',') + ')'


    document.getElementById("content").style.backgroundColor = 'rgb(' + [bgr,bgg,bgb].join(',') + ')';
    // (bgr, bgg, bgb);
}