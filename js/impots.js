/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function finale() {
    let revenufinal = document.getElementById("i_revenu").value;


    window.document.querySelector("#revenu").innerHTML = "Votre revenu étant de " + revenufinal + ", vos impots sont à hauteur de : " + recupMontantImposition(revenufinal) + "€";
    
}

function recupMontantImposition(revenu) {

    const tranche1 = 0.0;
    const tranche2 = 0.11;
    const tranche3 = 0.3;
    const tranche4 = 0.41;
    const tranche5 = 0.45;

    const maxTr1 = 10777;
    const minTr2 = 10778;
    const maxTr2 = 27478;
    const minTr3 = 27479;
    const maxTr3 = 78570;
    const minTr4 = 78571;
    const maxTr4 = 168994;
    const minTr5 = 168995;


    if (revenu >= minTr2 && revenu <= maxTr2) {
        return (revenu - maxTr1) * tranche2;
    }

    else if (revenu >= minTr3 && revenu <= maxTr3) {
        resul1 = (maxTr2 - maxTr1) * tranche2;
        resul = (revenu - maxTr2) * tranche3;
        return resultfinal = resul + resul1;
    }

    else if (revenu >= minTr4 && revenu <= maxTr4) {
        res = (revenu - maxTr3) * tranche4;
        res1 = (maxTr3 - maxTr2) * tranche3;
        res2 = (maxTr2 - maxTr1) * tranche2;
        return res + res1 + res2;
    }

    else if (revenu >= minTr5) {
        result1 = (revenu - maxTr4) * tranche5;
        result2 = (maxTr4 - maxTr3) * tranche4;
        result3 = (maxTr3 - minTr2) * tranche3;
        result4 = (maxTr2 - maxTr1) * tranche2;
        return result1 + result2 + result3 + result4;
    }
    else {
        return (revenu * tranche1);
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#i_revenu").addEventListener("input", finale);
}
);


