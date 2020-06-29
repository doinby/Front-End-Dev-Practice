// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;    
}

// UI constructor
function UI(){}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function(message, className){
    // Create div element & insert
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form  = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Timeout after 3sec
    setTimeout(function() {
        document.querySelector(".alert").remove();
    }, 3000);
}

// Clear Fields
UI.prototype.clearField = function(){
    document.getElementById('title').value = '';
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // Instantiate book constructor
    const book = new Book(title, author, isbn);
    
    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add book success
        ui.showAlert('Book Added!', 'success');
    
        // Clear field
        ui.clearField();
    }
    
    e.preventDefault();
});