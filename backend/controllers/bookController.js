const Book=require('../models/Book')

const getBooks=(req,res)=>{
    const books=Book.findAll();

    res.status(200).json({data:books})
}

const createBook=(req,res)=>{
    const {title,author,genre,publishedDate}=req.body

    if(!title || title.trim()==='' || !author || author.trim()==='' ||!genre || genre.trim()==='' ||!publishedDate || publishedDate.trim()===''){
        return res.status(404).json({message: "Fields Can not be empty Try Again"})
    }
    const newBook=Book.create({
        title,
        author,
        genre,
        publishedDate
    })
    res.status(201).json({newBook, message:'Book was ADDED succcessfully'})
}

const updateBook=(req,res)=>{
    const book=Book.findById(parseInt(req.params.id))


    if(!book ){
        return res.status(404).json({message: "Book Could not be Found"})
    }

    const updatedBook=Book.update(parseInt(req.params.id),req.body)
    res.status(200).json(updatedBook)
}

const deleteBook=(req,res)=>{
    const bookId=+req.params.id
    const book=Book.findById(bookId)

    if(!book){
        return res.status(404).json({message:'Book Not Found'})
    }

    Book.delete(bookId)
    return res.status(200).json({ bookDeleted: book, message: 'Book was Deleted Successfully' });
    // res.status(200).json({bookDeleted:booktoDelete,message:'Book was Deleted Successfully'})
}


module.exports={getBooks,createBook,updateBook,deleteBook}