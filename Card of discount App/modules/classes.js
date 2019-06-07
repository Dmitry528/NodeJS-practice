class DiscountCard{
    constructor(){
        this.numbCard = Math.floor(Math.random() * 123456789);
        this.discount = 1;
    }
    ShowInfo(){
        console.log(`Card number: ${this.numbCard}, your discount: ${this.discount}%`);
        /* discount ++ when things coust */
    }
}

module.exports = DiscountCard;