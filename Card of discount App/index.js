const card = require("./modules/classes");
const args = process.argv;


switch(args[2]){
    case `--info`:
        let myCardInfo = new card;
        myCardInfo.ShowInfo();
    break;

    case `--buy_SmartPhone`:
        let myCardBuy = new card;
        let price = 3000;
        myCardBuy.discount = 3;
        console.log(`Price this SmartPhone : 3000$`);
        console.log(`You buy this SmartPhone for ${price - (price / 100 * myCardBuy.discount)}$ becouse your discount is ${myCardBuy.discount}%`);
        myCardBuy.ShowInfo();
    break;

    case `--buy_SmartTV`:
        let myCardBuyTV = new card;
        let priceTV = 9000;
        myCardBuyTV.discount = 9;
        console.log(`Price this SmartPhone : 9000$`);
        console.log(`You buy this SmartPhone for ${priceTV - (priceTV / 100 * myCardBuyTV.discount)}$ becouse your discount is ${myCardBuyTV.discount}%`);
        myCardBuyTV.ShowInfo();
    break;

    case `--buy_food_starterPack`:
        let myCardBuyFood = new card;
        let priceFood = 450;
        myCardBuyFood.discount = 1;
        console.log(`Price this Pack : 450$`);
        console.log(`You buy this food for ${priceFood - (priceFood / 100 * myCardBuyFood.discount)}$ becouse your discount is ${myCardBuyFood.discount}%`);
        myCardBuyFood.ShowInfo();
    break;

    case `--buy_mineCraft`:
        let myCardBuyCraft = new card;
        let priceCraft = 1250;
        myCardBuyCraft.discount = 1.2;
        console.log(`Price this game : 1250$`);
        console.log(`You buy this game for ${priceCraft - (priceCraft / 100 * myCardBuyCraft.discount)}$ becouse your discount is ${myCardBuyCraft.discount}%`);
        console.log(`Its a good choice`);
        myCardBuyCraft.ShowInfo();
    break;

    default: 
        console.log(`--info - to show your start card info`);
        console.log(`--buy_SmartPhone - to buy this good`);
        console.log(`--buy_SmartTV - to buy this good`);
        console.log(`--buy_food_starterPack - to buy this good`);
    break;
}