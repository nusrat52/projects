
function myFunction1() {
    document.querySelector("#btn1").style.borderBottom = "2px solid #f7b200";
    document.querySelector("#btn2").style.borderBottom = "none";
    document.querySelector("#btn3").style.borderBottom = "none";
    document.getElementById("kreditdiv").style.display = "none"
    document.getElementById("digerdiv").style.display = "none"
    document.getElementById("debetdiv").style.display = "block"
    document.querySelector(".accordion-inline-0").innerText = "Debet"
    document.querySelector(".accordion-inline-1").innerText = "Kredit"
    document.querySelector(".accordion-inline-2").innerText = "Diger"

}

let window_location = location.href

if(window_location.includes('#credit')){
    myFunction2();
    console.log('here')
}
if(window_location.includes('#diger')){
    myFunction3();
    console.log('here')
}


function myFunction2() {
    document.querySelector("#btn2").style.borderBottom = "2px solid #f7b200";
    document.querySelector("#btn1").style.borderBottom = "none";
    document.querySelector("#btn3").style.borderBottom = "none";
    document.getElementById("debetdiv").style.display = "none"
    document.getElementById("digerdiv").style.display = "none"
    document.getElementById("kreditdiv").style.display = "block"
    document.querySelector(".accordion-inline-0").innerText = "Kredit"
    document.querySelector(".accordion-inline-1").innerText = "Debet"
    document.querySelector(".accordion-inline-2").innerText = "Diger"

}
function myFunction3() {
    document.querySelector("#btn3").style.borderBottom = "2px solid #f7b200";
    document.querySelector("#btn1").style.borderBottom = "none";
    document.querySelector("#btn2").style.borderBottom = "none";
    document.getElementById("kreditdiv").style.display = "none"
    document.getElementById("debetdiv").style.display = "none"
    document.getElementById("digerdiv").style.display = "block"
    document.querySelector(".accordion-inline-0").innerText = "Diger"
    document.querySelector(".accordion-inline-1").innerText = "Debet"
    document.querySelector(".accordion-inline-2").innerText = "Kredit"

}



document.querySelector(".kartlar_child_debet").addEventListener("click", () => {
    document.querySelector("#btn1").style.borderBottom = "2px solid #f7b200";
    document.querySelector("#btn2").style.borderBottom = "none";
    document.querySelector("#btn3").style.borderBottom = "none";
    document.getElementById("kreditdiv").style.display = "none"
    document.getElementById("digerdiv").style.display = "none"
    document.getElementById("debetdiv").style.display = "block"
});

document.querySelector(".kartlar_child_kredit").addEventListener("click", () => {
    document.querySelector("#btn2").style.borderBottom = "2px solid #f7b200";
    document.querySelector("#btn1").style.borderBottom = "none";
    document.querySelector("#btn3").style.borderBottom = "none";
    document.getElementById("debetdiv").style.display = "none"
    document.getElementById("digerdiv").style.display = "none"
    document.getElementById("kreditdiv").style.display = "block"
});


document.querySelector(".kartlar_child_diger").addEventListener("click", () => {
    document.querySelector("#btn3").style.borderBottom = "2px solid #f7b200";
    document.querySelector("#btn1").style.borderBottom = "none";
    document.querySelector("#btn2").style.borderBottom = "none";
    document.getElementById("kreditdiv").style.display = "none"
    document.getElementById("debetdiv").style.display = "none"
    document.getElementById("digerdiv").style.display = "block"
});



document.querySelector(".accordion-1").addEventListener("click", () => {
    if (document.querySelector(".accordion-inline-0").innerText === "Debet") {
        document.querySelector(".accordion-inline-0").innerText = "Kredit"
        document.querySelector(".accordion-inline-1").innerText = "Debet"
        document.querySelector(".accordion-inline-2").innerText = "Diger"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Kredit") {
        document.querySelector(".accordion-inline-0").innerText = "Debet"
        document.querySelector(".accordion-inline-1").innerText = "Kredit"
        document.querySelector(".accordion-inline-2").innerText = "Diger"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Diger") {
        document.querySelector(".accordion-inline-0").innerText = "Debet"
        document.querySelector(".accordion-inline-1").innerText = "Kredit"
        document.querySelector(".accordion-inline-2").innerText = "Diger"
    }
    document.querySelector('.show').classList.remove('show')
    if (document.querySelector(".accordion-inline-0").innerText === "Kredit") {
        document.querySelector("#btn2").style.borderBottom = "2px solid #f7b200";
        document.querySelector("#btn1").style.borderBottom = "none";
        document.querySelector("#btn3").style.borderBottom = "none";
        document.getElementById("debetdiv").style.display = "none"
        document.getElementById("digerdiv").style.display = "none"
        document.getElementById("kreditdiv").style.display = "block"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Debet") {
        document.querySelector("#btn1").style.borderBottom = "2px solid #f7b200";
        document.querySelector("#btn2").style.borderBottom = "none";
        document.querySelector("#btn3").style.borderBottom = "none";
        document.getElementById("kreditdiv").style.display = "none"
        document.getElementById("digerdiv").style.display = "none"
        document.getElementById("debetdiv").style.display = "block"

    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Diger") {
        document.querySelector("#btn3").style.borderBottom = "2px solid #f7b200";
        document.querySelector("#btn2").style.borderBottom = "none";
        document.querySelector("#btn1").style.borderBottom = "none";
        document.getElementById("kreditdiv").style.display = "none"
        document.getElementById("debetdiv").style.display = "none"
        document.getElementById("digerdiv").style.display = "block"
    }
})

document.querySelector(".accordion-2").addEventListener("click", () => {
    if (document.querySelector(".accordion-inline-0").innerText === "Debet") {
        document.querySelector(".accordion-inline-0").innerText = "Diger"
        document.querySelector(".accordion-inline-1").innerText = "Debet"
        document.querySelector(".accordion-inline-2").innerText = "Kredit"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Kredit") {
        document.querySelector(".accordion-inline-0").innerText = "Diger"
        document.querySelector(".accordion-inline-1").innerText = "Debet"
        document.querySelector(".accordion-inline-2").innerText = "Kredit"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Diger") {
        document.querySelector(".accordion-inline-0").innerText = "Kredit"
        document.querySelector(".accordion-inline-1").innerText = "Debet"
        document.querySelector(".accordion-inline-2").innerText = "Diger"
    }
    document.querySelector('.show').classList.remove('show')
    if (document.querySelector(".accordion-inline-0").innerText === "Diger") {
        document.querySelector("#btn3").style.borderBottom = "2px solid #f7b200";
        document.querySelector("#btn2").style.borderBottom = "none";
        document.querySelector("#btn1").style.borderBottom = "none";
        document.getElementById("kreditdiv").style.display = "none"
        document.getElementById("debetdiv").style.display = "none"
        document.getElementById("digerdiv").style.display = "block"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Debet") {
        document.querySelector("#btn1").style.borderBottom = "2px solid #f7b200";
        document.querySelector("#btn2").style.borderBottom = "none";
        document.querySelector("#btn3").style.borderBottom = "none";
        document.getElementById("kreditdiv").style.display = "none"
        document.getElementById("digerdiv").style.display = "none"
        document.getElementById("debetdiv").style.display = "block"
    }
    else if (document.querySelector(".accordion-inline-0").innerText === "Kredit") {
        document.querySelector("#btn2").style.borderBottom = "2px solid #f7b200";
        document.querySelector("#btn1").style.borderBottom = "none";
        document.querySelector("#btn3").style.borderBottom = "none";
        document.getElementById("debetdiv").style.display = "none"
        document.getElementById("digerdiv").style.display = "none"
        document.getElementById("kreditdiv").style.display = "block"
    }
})


function yazdir() {
    var val1 = document.getElementById("birselect").value
    console.log(val1)
    var val2 = document.getElementById("ikiselect").value
    console.log(val2)
    if (val1 == 'AZN') {
        var qiymet = document.getElementById("birinci-input").value
        console.log(qiymet)
        if (val2 == 'USD') {
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(usd)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(eur)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(rubl)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(gbp)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'EUR') {
        var qiymet = document.getElementById("birinci-input").value
        console.log(qiymet)
        if (val2 == 'USD') {
            var eur = document.getElementById('euro').innerText
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur) / parseFloat(usd)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var eur = document.getElementById('euro').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var eur = document.getElementById('euro').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur) / parseFloat(rubl)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var eur = document.getElementById('euro').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur) / parseFloat(gbp)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'USD') {
        var qiymet = document.getElementById("birinci-input").value
        console.log(qiymet)
        if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd) / parseFloat(eur)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var usd = document.getElementById('dollar').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd) / parseFloat(rubl)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var usd = document.getElementById('dollar').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd) / parseFloat(gbp)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'RUB') {
        var qiymet = document.getElementById("birinci-input").value
        console.log(qiymet)
        if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl) / parseFloat(eur)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'USD') {
            var usd = document.getElementById('dollar').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl) / parseFloat(usd)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var rubl = document.getElementById('rubl').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl) / parseFloat(gbp)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'GBP') {
        var qiymet = document.getElementById("birinci-input").value
        console.log(qiymet)
        if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp) / parseFloat(eur)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'USD') {
            var usd = document.getElementById('dollar').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp) / parseFloat(usd)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var rubl = document.getElementById('rubl').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp) / parseFloat(rubl)
            var son = document.getElementById("ikinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
}

function yazdirildi() {
    
    var val2 = document.getElementById("birselect").value
    console.log(val1)
    
    var val1 = document.getElementById("ikiselect").value
    console.log(val2)
    if (val1 == 'AZN') {
        var qiymet = document.getElementById("ikinci-input").value
        console.log(qiymet)
        if (val2 == 'USD') {
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'EUR') {
            var euro = document.getElementById('euro').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var usd = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet / parseFloat(gbp)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'EUR') {
        var qiymet = document.getElementById("ikinci-input").value
        console.log(qiymet)
        if (val2 == 'USD') {
            var eur = document.getElementById('euro').innerText
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur) / parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var eur = document.getElementById('euro').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var eur = document.getElementById('euro').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur) / parseFloat(rubl)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var eur = document.getElementById('euro').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(eur) / parseFloat(gbp)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'USD') {
        var qiymet = document.getElementById("ikinci-input").value
        console.log(qiymet)
        if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd) / parseFloat(eur)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var usd = document.getElementById('dollar').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var usd = document.getElementById('dollar').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd) / parseFloat(rubl)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var usd = document.getElementById('dollar').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(usd) / parseFloat(gbp)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'RUB') {
        var qiymet = document.getElementById("ikinci-input").value
        console.log(qiymet)
        if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl) / parseFloat(eur)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'USD') {
            var usd = document.getElementById('dollar').innerText
            var rubl = document.getElementById('rubl').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl) / parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'GBP') {
            var rubl = document.getElementById('rubl').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(rubl) / parseFloat(gbp)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
    else if (val1 == 'GBP') {
        var qiymet = document.getElementById("ikinci-input").value
        console.log(qiymet)
        if (val2 == 'EUR') {
            var eur = document.getElementById('euro').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp) / parseFloat(eur)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'AZN') {
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'USD') {
            var usd = document.getElementById('dollar').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp) / parseFloat(usd)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }
        else if (val2 == 'RUB') {
            var rubl = document.getElementById('rubl').innerText
            var gbp = document.getElementById('sterling').innerText
            console.log(usd)
            cvb = qiymet * parseFloat(gbp) / parseFloat(rubl)
            var son = document.getElementById("birinci-input").value = cvb.toFixed(4)
            console.log(son)
        }

    }
}


$("#birselect").on("change", function () {
    
    if ($("#birselect").val() == $("#ikiselect").val()) {
            // $(".gbp:nth-child(2)").prop('selected', 'selected').change();
            if ($("#birselect").val() == $("#ikiselect").val()) {
                    $(".gbp:nth-child(2)").prop('selected', 'selected').change();
                }
            }
    return yazdir()
})
$("#ikiselect").on("change", function () {
    
    if ($("#birselect").val() == $("#ikiselect").val()) {
        $(".gbp2:nth-child(3)").prop('selected', 'selected').change();
        if ($("#birselect").val() == $("#ikiselect").val()) {
            $(".gbp2:nth-child(2)").prop('selected', 'selected').change();
        }
    }
    return yazdirildi()
})



function msg_open (){
    document.getElementById('gorsen').style.visibility = 'inherit'
    document.getElementById('gorsen').style.width = '350px'
    document.getElementById('gorsen').style.height = '550px'
}

document.getElementById("xett-bagla").addEventListener("click", () => {
    console.log("dadadada")
    document.getElementById('gorsen').style.visibility = 'hidden'
    document.getElementById('gorsen').style.width = '0'
    document.getElementById('gorsen').style.height = '0'
})


document.getElementById("icon_hover").addEventListener("mouseover", () =>{
    document.getElementById("icon_hover").style.display = "none"
    document.getElementById("icon_hover2").style.display = "block"

})

document.getElementById("icon_hover").addEventListener("mouseout", () =>{
    document.getElementById("icon_hover").style.display = "block"
    document.getElementById("icon_hover2").style.display = "none"

})



