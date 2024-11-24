class Book{

    static Books=[];
    static currentId=1;

    constructor(title,author,genre,publishedDate){
        this.id=Book.currentId++;
        this.title=title;
        this.author=author;
        this.genre=genre;
        this.publishedDate=publishedDate;
        // this.userId=userId
    }

    static create(bookData){
        const newBook=new Book(bookData.title,bookData.author,bookData.genre,bookData.publishedDate)
        Book.Books.push(newBook)
        return newBook
    }

    // static findAll(userId){
    //     return Book.Books.filter(book=>book.userId===userId)
    // }
    static findAll(){
        return Book.Books
    }
    static findById(Id){
        return Book.Books.find(book=>book.id===Id)
    }

    static update(id,updateData){
        const book=Book.findById(id);

        if(!book){
            console.log('No Book For now found')
            return null
            
        }
        Object.assign(book,updateData)
    }

    static delete(id){
        const index=Book.Books.findIndex(book=>book.id===id)

        if(index===-1){
            console.log('Cant Delete for Whatever Reason!')
            return null
        }

        return Book.Books.splice(index,1)
    }
}

module.exports=Book;