var input = document.querySelector('#search input');
var addButton = document.querySelector('#search button');
var table = document.querySelector('.table tbody');

<<<<<<< HEAD
var basket = document.querySelector('.basket tbody')

=======
>>>>>>> 16dec815ca6019712f2874c5505578f5a441cca0
addButton.addEventListener('click', function() {
    
  Swal.fire({
    title: 'Заполни поля и тд.',
    html:
      '<label for="name">Name</label><input id="name" class="input" type="text" required>' +
      '<label for="price">Price</label><input id="price" class="input" type="number" min="0" step="0.01" required>' +
      '<label for="count">Count</label><input id="count" class="input" type="number" min="0" required>',
    showCancelButton: true,
    confirmButtonText: 'Save',
    cancelButtonText: 'Cancel',
    allowOutsideClick: false,
    allowEscapeKey: false,
    focusConfirm: false, 
    preConfirm: function() {
    
      var name = document.getElementById('name').value;
      var price = document.getElementById('price').value;
      var count = document.getElementById('count').value;
      
      if (!name || !price || !count) {
        Swal.showValidationMessage('Заполни поля.');
      }
      
      return {
        name: name,
        price: price,
        count: count
      };
    }
  }).then(function(result) {
    
    if (result.value) {    
        
        var name = result.value.name;
        var price = parseFloat(result.value.price).toFixed(2);
        var quantity = parseInt(result.value.count); 
        
        var row = document.createElement('tr');
        row.innerHTML = '<td>#</td>' +
                        '<td>' + name + '</td>' +
                        '<td>' + price + '</td>' +
                        '<td>' + quantity + '</td>' +
                        '<td><button class="del-btn button is-danger">X</button></td>';

        
        table.appendChild(row);
        
        input.value = '';
        
        const elem = document.querySelectorAll('#price')

        var sum  = document.querySelector('#sum') //блок суммы

        let total = 0;

        elem.forEach(price => {
          total += Number(price.value);
        });

        if(sum.textContent !== null){
          let oldSum = Number(sum.textContent);
          let currentSum = total + oldSum;
<<<<<<< HEAD
          
=======
          console.log(currentSum);
>>>>>>> 16dec815ca6019712f2874c5505578f5a441cca0
          sum.textContent = String(currentSum.toFixed(2));
        } else {
          sum.textContent = String(total.toFixed(2));
        }

        
        
        var deleteButton = row.querySelector('.del-btn');
        deleteButton.addEventListener('click', function() {
          row.remove();
        });
<<<<<<< HEAD




=======
>>>>>>> 16dec815ca6019712f2874c5505578f5a441cca0
      }
  });
});