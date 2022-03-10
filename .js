var yasNesne = document.getElementById("yas");
var hesaplaBtn = document.getElementById("hesapla");


hesaplaBtn.onclick = islemYap;

function islemYap() {

    var yas = Number(yasNesne.value);


    var durumGoster = document.getElementById("durumgoster");
    if (yas >= 18) {

        durumGoster.innerHTML = "Ehliyet ala bilirsiniz.";
    } else {
        durumGoster.innerHTML = "ehliyet alamasın." +
            "<BR> " + (18 - yas) + " yıl sonra tekrar gelin.";
    }
}