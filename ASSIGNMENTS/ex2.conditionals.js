let buyerName='Melanie';
let amountDue =50000;
let itemName='wires';
//conditional validation
if(buyerName.length>=2 && amountDue>=10000 && itemName.length>0){
    console.log('Valid sales record');
}else{
    console.log('Invalid sales record');
}