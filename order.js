document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const table = document.getElementById('table').value;
    const order = document.getElementById('order').value;
  
    if (!name || !table || !order) {
        alert('Please fill in all fields');
        return;
    }
  
    const orderData = {
        name: name,
        table: table,
        order: order,
        status: 'Placed',
        timestamp: new Date().toLocaleString()
    };
  
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
  
    document.getElementById('orderResult').innerText = `Order placed for ${name} at Table ${table}.`;
  
    loadOrderHistory();
    document.getElementById('orderForm').reset();
  });
  
  function loadOrderHistory() {
    const orderHistory = document.getElementById('orderHistory');
    orderHistory.innerHTML = '';
  
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    orders.forEach((order, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${order.timestamp} - ${order.name}, Table ${order.table}: ${order.order} 
            <span class="delete-btn" onclick="deleteOrder(${index})">X</span>
        `;
        orderHistory.appendChild(listItem);
    });
  }
  
  function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    loadOrderHistory();
  }
  
  function completeOrder() {
    document.getElementById('orderResult').innerText = "Refill Complete! Your order has been fulfilled.";
  }
  
  document.getElementById('returnHome').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  
  // Load orders when page loads
  document.addEventListener('DOMContentLoaded', loadOrderHistory);
  
  
  // Redirect to the main page when the button is clicked
  document.getElementById('returnHome').addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace 'index.html' with your main page filename
  });