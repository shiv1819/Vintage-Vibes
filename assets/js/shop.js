var x = 1;

function filters() {
    if (window.innerWidth > 1024) {
        x++;
        if (x % 2 == 0) {
            document.getElementById("show").innerHTML = "Show Filters";
            document.getElementById("filter").style.transition = "1s";
            document.getElementById("filter").style.width = "0";
            document.getElementById("filter").style.transform = "translateX(-1000px)";
            document.getElementById("filter").style.opacity = "0";
            document.getElementById("filter").style.padding = "0";
            document.getElementById("id1").style.width = "25%";
            document.getElementById("id2").style.width = "25%";
            document.getElementById("id3").style.width = "25%";
            document.getElementById("id4").style.width = "25%";
            document.getElementById("id4").style.width = "25%";
            document.getElementById("id5").style.width = "25%";
            document.getElementById("id6").style.width = "25%";
            document.getElementById("id7").style.width = "25%";
            document.getElementById("id8").style.width = "25%";
            document.getElementById("id9").style.width = "25%";
            document.getElementById("id10").style.width = "25%";
            document.getElementById("id11").style.width = "25%";
            document.getElementById("id12").style.width = "25%";
            document.getElementById("id13").style.width = "25%";
            document.getElementById("id14").style.width = "25%";
            document.getElementById("id15").style.width = "25%";
            document.getElementById("id16").style.width = "25%";
            document.getElementById("id17").style.width = "25%";
            document.getElementById("id18").style.width = "25%";
            document.getElementById("id19").style.width = "25%";
            document.getElementById("id20").style.width = "25%";
            console.log(x);
        }
        else if (x % 2 == 1) {
            document.getElementById("show").innerHTML = "hide Filters";
            document.getElementById("filter").style.transition = "1s";
            document.getElementById("filter").style.width = "30%";
            document.getElementById("filter").style.transform = "translateX(0px)";
            document.getElementById("filter").style.opacity = "1";
            document.getElementById("filter").style.paddingLeft = "70px";
            document.getElementById("id1").style.width = "33%";
            document.getElementById("id2").style.width = "33%";
            document.getElementById("id3").style.width = "33%";
            document.getElementById("id4").style.width = "33%";
            document.getElementById("id4").style.width = "33%";
            document.getElementById("id5").style.width = "33%";
            document.getElementById("id6").style.width = "33%";
            document.getElementById("id7").style.width = "33%";
            document.getElementById("id8").style.width = "33%";
            document.getElementById("id9").style.width = "33%";
            document.getElementById("id10").style.width = "33%";
            document.getElementById("id11").style.width = "33%";
            document.getElementById("id12").style.width = "33%";
            document.getElementById("id13").style.width = "33%";
            document.getElementById("id14").style.width = "33%";
            document.getElementById("id15").style.width = "33%";
            document.getElementById("id16").style.width = "33%";
            document.getElementById("id17").style.width = "33%";
            document.getElementById("id18").style.width = "33%";
            document.getElementById("id19").style.width = "33%";
            document.getElementById("id20").style.width = "33%";
            console.log(x);
    
        }
    }
   
}
