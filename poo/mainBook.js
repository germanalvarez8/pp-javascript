class Book {
    constructor(title, author, publishYear) {
        this.title = title;
        this.author = author;
        this.publishYear = publishYear;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(author) {
        this.author = author;
    }

    getPublishYear() {
        return this.publishYear;
    }

    setPublishYear(publishYear) {
        this.publishYear = publishYear;
    }
}

let libro = new Book("1984", "George Orwell", 1949);
console.log(`Titulo: ${libro.getTitle()}; Anio de publicación: ${libro.getPublishYear()}`);
libro.setTitle("Animal Farm");
console.log(`Nuevo titulo: ${libro.getTitle()};  Anio de publicación: ${libro.getPublishYear()}`);
