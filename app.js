function login() {
    var idNumber = document.getElementById('idNumber').value;
    alert('Logged in with ID: ' + idNumber);
}

function placeOrder() {
    document.getElementById('output').innerHTML = 'Order has been placed!';
}

function viewOrder() {
    document.getElementById('output').innerHTML = 'Viewing current order!';
}

function updateOrder() {
    document.getElementById('output').innerHTML = 'Order has been updated!';
}

function addItem() {
    alert('Item added to the order!');
}
