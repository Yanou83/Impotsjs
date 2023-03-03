/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recupMontantImposition(montant){
    const tranche1 = 0;
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
    
    
    
    if (montant <= maxTr1){
        return result = montant*tranche1;
    }
    else if (montant >= minTr2 && montant <= maxTr2){
        return result2 = (montant - minTr2) * tranche2;
    }
    else if (montant >= minTr3 && montant <= maxTr3){
        
    }
   
}
