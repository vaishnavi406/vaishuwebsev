const prompt=require("prompt-sync")({siginit:true});

let itemnames=[];
let itemprices=[];
for(let  i=0;i<5;i++)
{
    let name = prompt("Enter the name of the product: ");
    let price = parseFloat(prompt("Enter the price of the product: "));
    itemnames.push(name);
    itemprices.push(price);

}
let cheapitems=[];
let moderateitems=[];
let expensiveitems=[];
for(let i=0;i<itemprices.length;i++)
{
    if(itemprices[i]<=500)
    {
       cheapitems.push(itemnames[i]);
    }
    else if(itemprices[i]>500&&itemprices[i]<=1500)
    {
        moderateitems.push(itemnames[i]);
    }
    else{
        expensiveitems.push(itemnames[i]);
    }
}
console.log("cheapitems are :",cheapitems);
console.log("moderateitema are:",moderateitems);
console.log("expensiveitems are:",expensiveitems);
