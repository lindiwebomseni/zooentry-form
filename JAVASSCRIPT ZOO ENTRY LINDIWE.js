function calculatePrice() {
    var age = document.getElementById('age').value;
    var price;



    if (age >= 0-3) {
        price = 0; // Price for children (0-3 years old)
    } else if (age > 4-12) {
        price = 100; // Price for adults (4-12 years old)
    } else if (age > 13-18) {
        price = 150; // Price for seniors (13-18 years old)
    }
        else if(age>19-65)
        price=200
    else{
        price=0

    }
    document.getElementById('priceDisplay').innerHTML = "Total Price: R" + totalPrice;
};


