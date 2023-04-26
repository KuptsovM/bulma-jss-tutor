var input = document.querySelector('#search input');
var addButton = document.querySelector('#search button');
var table = document.querySelector('.table tbody');


addButton.addEventListener('click', function() {
  
  var team = 'Some team'; //не забудь добавить парсер из модального окна, я надеюсь я не забуду
  var name = input.value.trim(); //форматирование строки, робельчики там...
  var price = '100';  //сюды тоже парсер
  var quantity = '5';  //и сюда
  //Я надеюсь эти заметки найдут в будущем мои предки

  var row = document.createElement('tr');
  row.innerHTML = '<td>#</td>' +
                  '<td>' + team + '</td>' +
                  '<td>' + name + '</td>' +
                  '<td>' + price + '</td>' +
                  '<td>' + quantity + '</td>';
  
  
  table.appendChild(row);
  
 
  input.value = '';
});