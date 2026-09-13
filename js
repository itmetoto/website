let photos = ["art1.jpg","art2.jpg","art3.jpg"];
let x = 0;
function slideshow()   
{   
    if (x==3)
    {
        x=0;
    }
    document.getElementById("photo").src = photos[x];
    x++;
}

setInterval(slideshow,5000);
