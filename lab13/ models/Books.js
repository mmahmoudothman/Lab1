let books = [
    { id: 1, title: 'Algo', ISBN: '111', publishedDate: '01/10/2023', author: 'ruby' },
    { id: 2, title: 'MPP', ISBN: '222', publishedDate: '01/01/2023', author: 'ruby' },
    { id: 3, title: 'WAP', ISBN: '33', publishedDate: '01/11/2023', author: 'tina' }
];
let counter = 4;

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAllBooks() {
        return books;
    }

    static getBookById(id) {
        return books.find(p => p.id == id);
    }

    save() {
        this.id = counter++;
        books.push(this);
    }

    updateById(id) {
        const index = books.findIndex(p => p.id == id);
        if (index > -1) {
            this.id = id;
            books[index] = this;
        } else {
            throw new Error(`book with ID: ${id} cannot find in DB`);
        }
    }

    static deleteById(id) {
        const index = books.findIndex(p => p.id == id);
        if (index > -1) {
            books.splice(index, 1);
        } else {
            throw new Error(`books with ID: ${id} cannot find in DB`);
        }
    }
}