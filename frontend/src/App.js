
import { useEffect, useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import FetchBook from './components/FetchBooks';

function App() {
  const [books,setBooks]=useState([])

  const fetchBooks=()=>{
    fetch(`http://localhost:5000/books`).then((res)=>{
      if(!res.ok){
        throw new Error("Failed To fetch")
      }
      return res.json()
    }).then((data)=>{
      setBooks(data.data||[])
    }).catch((err)=>{
      console.log("Error Fetching Books",err)
    })
  }

  useEffect(()=>{
    fetchBooks()
  },[])

  const addBook=(newBook)=>{
    fetch(`http://localhost:5000/books`, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
  }).then((res)=>{
    if(!res.ok){
      return <p>An Error Occured</p>
    }
    return res.json();
  }).then((data)=>{
    // console.log('Added Book',data)
    fetchBooks()
  })
}

  const deleteHandler=(id)=>{
    fetch(`http://localhost:5000/books/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id)))
      // .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
  const updateHandler=(id,updatedDetails)=>{
    fetch(`http://localhost:5000/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDetails),
    })
      .then((res) => res.json())
      .then((updatedBook) => {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === id ? { ...book, ...updatedBook } : book
          )
        );
      })
      .catch((err) => console.error(err));
  }

// console.log(books)
  return (
    <div className="App">
      <AddBook onAddBook={addBook}/>
      <FetchBook books={books} onDelete={deleteHandler} onUpdateBook={updateHandler}/>
    </div>
  );
}

export default App;
