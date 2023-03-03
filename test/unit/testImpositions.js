/* 
 * Tests unitaires du projet Impots sur le revenu
 */

MesTestsUnitaires = TestCase('ImpotsTest');
MesTestsUnitaires.prototype.testsTranche1 = function(){
    assertEquals('0€ de revenus', 0, recupMontantImposition(0));
    assertEquals('5000€ de revenus', 0, recupMontantImposition(5000));
    assertEquals('10777€ de revenus', 0, recupMontantImposition(10777));
}  
        
