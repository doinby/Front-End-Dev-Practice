const li = document.createElement('li');

li.className = 'collection-item';
li.appendChild(document.createTextNode('Hello World'));

document.querySelector('ul.collection').appendChild(li);

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

console.log(li);