function hideOll() {
    var myDiv1 = document.getElementById("nomer1");
    var myDiv2 = document.getElementById("nomer2");
    var myDiv3 = document.getElementById("nomer3");

    var genRecClose = document.getElementById("generRecID");
    genRecClose.style.display = "none";

    var specRecClose = document.getElementById("specificID");
    specRecClose.style.display = "none";
    
    var sleepPage = document.getElementById("sleepPage");
    sleepPage.style.display = "none";

    myDiv1.style.display = "none";
    myDiv2.style.display = "none";
    myDiv3.style.display = "none";

    var firstPage1 = document.getElementById("firstPage1");
    firstPage1.style.display = "none";
}

function open123() {
    var genRecClose1 = document.getElementById("firstPage1");
    genRecClose1.style.display = "none";

    if(genRecClose1.style.display == "none"){
        genRecClose1.style.display = "block";
    } 
}

function registr() {
    var myDiv = document.getElementById("nomer2");
    // var genRecClose = document.getElementById("firstPage1");

    if( myDiv.style.display == "flex"){
        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
}

function authorization() {
    var myDiv = document.getElementById("nomer3");
    // var genRecClose = document.getElementById("firstPage1");
    // if(genRecClose.style.display == "flex")


    if( myDiv.style.display == "flex"){
        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
}

function hideColorOll() {
    var colorCh1 = document.getElementById("pngBek1");
    var colorCh2 = document.getElementById("pngBek2");
    var colorCh3 = document.getElementById("pngBek3");
    var colorCh4 = document.getElementById("pngBek4");
    var colorCh5 = document.getElementById("pngBek5");

    colorCh1.style.backgroundColor = "#D9D9D9";
    colorCh2.style.backgroundColor = "#D9D9D9";
    colorCh3.style.backgroundColor = "#D9D9D9";
    colorCh4.style.backgroundColor = "#D9D9D9";
    colorCh5.style.backgroundColor = "#D9D9D9";
}

function hedBut1Fun() {
    var colorCh1 = document.getElementById("pngBek1");
    colorCh1.style.backgroundColor = "#156F83";
}

function hedBut2Fun() {
    var colorCh2 = document.getElementById("pngBek2");
    colorCh2.style.backgroundColor = "#156F83";
}

function hedBut3Fun() {
    var colorCh3 = document.getElementById("pngBek3");
    colorCh3.style.backgroundColor = "#156F83";
}

function hedBut4Fun() {
    var colorCh4 = document.getElementById("pngBek4");
    colorCh4.style.backgroundColor = "#156F83";
}

function hedBut5Fun() {
    var colorCh5 = document.getElementById("pngBek5");
    colorCh5.style.backgroundColor = "#156F83";
}


function hideFunColor() {
    var pngBekFunSleep1 = document.getElementById("pngBekFunSleep1");
    var pngBekFunSleep2 = document.getElementById("pngBekFunSleep2");
    var pngBekFunSleep3 = document.getElementById("pngBekFunSleep3");

    pngBekFunSleep1.style.backgroundColor = "#D9D9D9";
    pngBekFunSleep2.style.backgroundColor = "#D9D9D9";
    pngBekFunSleep3.style.backgroundColor = "#D9D9D9";
}

function funSleep1() {
    var funSleep1 = document.getElementById("pngBekFunSleep1");
    funSleep1.style.backgroundColor = "#156F83";
}

function funSleep2() {
    var funSleep2 = document.getElementById("pngBekFunSleep2");
    funSleep2.style.backgroundColor = "#156F83";
}

function funSleep3() {
    var funSleep3 = document.getElementById("pngBekFunSleep3");
    funSleep3.style.backgroundColor = "#156F83";
}

// Функції сторінки Sleep 

function closesleepPage() {
    var genRecClose = document.getElementById("sleepPage");
    genRecClose.style.display = "none";
}

function generRecomend() {
    var genRec = document.getElementById("generRecID");
    genRec.style.display = "flex";
}

function specRecomend() {
    var genRec = document.getElementById("specificID");
    genRec.style.display = "flex";
}


function sleepPage() {
    var myDiv = document.getElementById("firstPage1");
    var myDivSleepPage = document.getElementById("sleepPage");
    myDiv.style.display = "none";

    if(myDiv.style.display == "none"){
        myDivSleepPage.style.display = "block";
    } 
}

function hideOllFunSleep() { 
    var funSleepMoreInfo = document.getElementById("conteinerSleepMoreInfo");

    var funSleerAddInfo = document.getElementById("conteinerSleepAddNewInf");

    var funSleepHistory = document.getElementById("conteinerHistorySleep");

    funSleepMoreInfo.style.display = "none";
    funSleerAddInfo.style.display = "none";
    funSleepHistory.style.display = "none";
}

function funSleepAdd() {
    var conteinerSleepAddNewInf = document.getElementById("conteinerSleepAddNewInf");
    conteinerSleepAddNewInf.style.display = "block";
}

function funSleepMoreInfo() {
    var conteinerMoreSleep = document.getElementById("conteinerSleepMoreInfo");
    conteinerMoreSleep.style.display = "block";
}

function funSleepHistory() {
    var conteinerMoreSleep = document.getElementById("conteinerHistorySleep");
    conteinerMoreSleep.style.display = "block";
}

function hideOllDiv() {
    var s1 = document.getElementById("manDiv");
    s1.style.display = "none";

    var s2 = document.getElementById("womanDiv");
    s2.style.display = "none";

    var s3 = document.getElementById("childDiv");
    s3.style.display = "none";

    var s4 = document.getElementById("solderDiv");
    s4.style.display = "none";

    var style1 = document.getElementById("tipForMan");
    style1.style.backgroundColor = "#D9D9D9";

    var style2 = document.getElementById("tipWomanMan");
    style2.style.backgroundColor = "#D9D9D9";

    var style3 = document.getElementById("tipChildMan");
    style3.style.backgroundColor = "#D9D9D9";
    
    var style4 = document.getElementById("tipSolderMan");
    style4.style.backgroundColor = "#D9D9D9";
}

function seeManDiv() {
    var w1 = document.getElementById("manDiv");
    w1.style.display = "flex";
    var style1 = document.getElementById("tipForMan");
    style1.style.backgroundColor = "white";
}

function seeWomanDiv() {
    var w2 = document.getElementById("womanDiv");
    w2.style.display = "flex";
    var style2 = document.getElementById("tipWomanMan");
    style2.style.backgroundColor = "white";
}

function seeChildDiv() {
    var w3 = document.getElementById("childDiv");
    w3.style.display = "flex";
    var style3 = document.getElementById("tipChildMan");
    style3.style.backgroundColor = "white";

}

function seeSolderDiv() {
    var w4 = document.getElementById("solderDiv");
    w4.style.display = "flex";
    var style4 = document.getElementById("tipSolderMan");
    style4.style.backgroundColor = "white";
}


// Ai function 

function aicolorcheng() {
    var button = document.getElementById('aiButid');
    if (button.classList.contains('clicked')) {
        button.classList.remove('clicked'); // Видаляємо клас 'clicked'
        button.classList.add('initialState'); // Додаємо клас 'initialState'
    } else {
        button.classList.remove('initialState'); // Видаляємо клас 'initialState'
        button.classList.add('clicked'); // Додаємо клас 'clicked'
    }


    var div = document.getElementById("divAiid");
    if (div.style.display === "block") {
        div.style.display = "none"; // Приховуємо div, якщо він відображений
    } else {
        div.style.display = "block"; // Показуємо div, якщо він прихований
    }
}

// function toggleVisibility() {
//     var div = document.getElementById("divAiid");
//     if (div.style.display === "none") {
//         div.style.display = "block"; // Показуємо div, якщо він прихований
//     } else {
//         div.style.display = "none"; // Приховуємо div, якщо він відображений
//     }
// }