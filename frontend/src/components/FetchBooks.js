

import React from 'react';
import styles from './FetchBook.module.css'; // Import CSS module

const FetchBook = ({ books,onDelete,onUpdateBook }) => {
  if (!books || books.length === 0) {
    return <p className={styles.noBooks}>No Books Found at The Moment</p>;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {books.map((book) => (
          <li key={book.id} className={styles.li}>
            {book.title} - {book.author} - {book.genre} - {book.publishedDate}
            <button className={styles.button} onClick={()=>{onDelete(book.id)}}>Delete</button>
            {/* <button className={styles.button} onClick={()=>{onUpdateBook(book.id,{})}}>Update</button> */}
            <button className={styles.button}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchBook;
