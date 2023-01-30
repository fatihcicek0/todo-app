var items = ['item1', 'item2', 'item3', 'item4'];
var list = document.querySelector('#mylist');

items.forEach(function (item) {
  createitem(item);
});
list.addEventListener('click', function (item) {
  if (item.target.tagName = 'li') {
    item.target.className = 'checked';
    var x = item.target.childNodes;
    x[1].style.display = 'none';
    ToogleDeleteButton();

  }
  function ToogleDeleteButton() {
    var checklist = document.querySelectorAll('.checked');
    if (checklist.length > 0) {
      document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
      document.querySelector('#deleteAll').classList.add('d-none');

    }
  }

});
document.querySelector('#deleteAll').onclick = function () {
  var elements = document.querySelectorAll('.checked');
  elements.forEach(function (item) {
    item.style.display = 'none';
  });
}

document.querySelector('#btncreate').onclick = function () {
  var item = document.querySelector('#txtitem').value;
  if (item === '') {
    alert('lütfen bir değer giriniz.');
    return;
  }
  createitem(item);
};
function createitem(item) {
  var li = document.createElement('li');
  var t = document.createTextNode(item);
  li.appendChild(t);
  list.appendChild(li);

  var span = document.createElement('span');
  var text = document.createTextNode('x');
  span.className = 'close';
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    var li = this.parentElement;
    li.style.display = 'none';
    li.classList.remove('checked');
  }
}