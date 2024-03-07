
function calculatePrice() {
    var age = parseInt(document.getElementById('age').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var totalPrice = 0;

    if (age >= 0 && age <= 3) {
        totalPrice = 0; // Price for children (0-3 years old)
    } else if (age >= 4 && age <= 12) {
        totalPrice = 100 * quantity; // Price for children (4-12 years old)
    } else if (age >= 13 && age <= 18) {
        totalPrice = 150 * quantity; // Price for seniors (13-18 years old)
    } else if (age >= 19 && age <= 65) {
        totalPrice = 200 * quantity; // Price for adults (19-65 years old)
    }

    document.getElementById('priceDisplay').innerHTML = "Total Price: R" + totalPrice;
}
