/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recupMontantImposition(revenu){

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
    
    
   
/*
 * Revenu tranche5
 */ 
    if (revenu => minTr5){
        result1 = (revenu - minTr5) * tranche5;
        result2 = (maxTr4 - minTr4) * tranche4;
        result3 = (maxTr3 - minTr3) * tranche3;
        result4 = (maxTr2 - minTr2) * tranche2;
        resulatfinal5 = result1 + result2 + result3 + result4;
        
/*
 * Revenu tranche4
 */ 
        if(revenu < minTr5 && revenu >= minTr4){
            result2 = (revenu - minTr4) * tranche4;
            result3 = (maxTr3 - minTr3) * tranche3;
            result4 = (maxTr2 - minTr2) * tranche2;
            resulatfinal5 = result2 + result3 + result4;
            
/*
 * Revenu tranche3
 */ 
            
            if(revenu < minTr4 && revenu >= minTr3){
                result3 = (revenu - minTr3) * tranche3;
                result4 = (maxTr2 - minTr2) * tranche2;
                resulatfinal5 = result3 + result4;
                
/*
 * Revenu tranche2
 */ 
                
                if(revenu < minTr3 && revenu >= minTr2){
                    result1 = (revenu - minTr2) * tranche2;
                    
                    
/*
 * Revenu tranche1
 */ 
                    
                    if(revenu <= maxTr1){
                        resultfinal = revenu;
                    }    
                }
               
            }
            
        }
    }
   
}
