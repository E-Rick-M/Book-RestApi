// import {useRef} from 'react'
// const AddBook=({onAddBook})=>{

//     const Enteredtitle=useRef()
//     const EnteredAuthor=useRef()
//     const Enteredgenre=useRef()
//     const EnteredpublishedDate=useRef()

//     // const submitData=(data)=>{
//     //     fetch(`http://localhost:5000/books`,{
//     //         method:'POST',
//     //         body:JSON.stringify(data),
//     //         headers:{
//     //             'content-type':'application/json'
//     //         }
//     //     })
//     // }

//     const submitHandler=(event)=>{
//         event.preventDefault()

//         if(!Enteredtitle || !EnteredAuthor || !Enteredgenre || !EnteredpublishedDate){
//             return
//         }
//         // const Date=new Date(EnteredpublishedDate.current.value)
//         const title=Enteredtitle.current.value
//         const genre=Enteredgenre.current.value
//         const author=EnteredAuthor.current.value
//         const DateValue=EnteredpublishedDate.current.value
//         const publishedDate=new Date(DateValue).toLocaleDateString('en-us',{
//             day:'2-digit',
//             month:'long',
//             year:'numeric'
//         })
//         const allData={
//             title,
//             genre,
//             author,
//             publishedDate
//         }
//         onAddBook(allData)
//     }

//     return(
//         <div>
//             <form onSubmit={submitHandler}>
//                 <label htmlFor='title'>Title</label>
//                 <input type='text' ref={Enteredtitle}/>
//                 <label htmlFor='author'>Author</label>
//                 <input type='text' ref={EnteredAuthor}/>
//                 <label htmlFor='genre'>genre</label>
//                 <input type='text' ref={Enteredgenre}/>
//                 <label htmlFor='date'>publishedDate</label>
//                 <input type='date'ref={EnteredpublishedDate}/>
//                 <button>Submit Data</button>
//             </form>
//         </div>
//     )
// }

// export default AddBook


import { useRef } from 'react';
import styles from './AddBook.module.css'; // Import CSS module

const AddBook = ({ onAddBook }) => {
  const Enteredtitle = useRef();
  const EnteredAuthor = useRef();
  const Enteredgenre = useRef();
  const EnteredpublishedDate = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Enteredtitle || !EnteredAuthor || !Enteredgenre || !EnteredpublishedDate) {
      return;
    }

    const title = Enteredtitle.current.value;
    const genre = Enteredgenre.current.value;
    const author = EnteredAuthor.current.value;
    const DateValue = EnteredpublishedDate.current.value;
    const publishedDate = new Date(DateValue).toLocaleDateString('en-us', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const allData = {
      title,
      genre,
      author,
      publishedDate,
    };
    onAddBook(allData);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.label} htmlFor="title">
          Title
        </label>
        <input className={styles.input} type="text" ref={Enteredtitle} />
        <label className={styles.label} htmlFor="author">
          Author
        </label>
        <input className={styles.input} type="text" ref={EnteredAuthor} />
        <label className={styles.label} htmlFor="genre">
          Genre
        </label>
        <input className={styles.input} type="text" ref={Enteredgenre} />
        <label className={styles.label} htmlFor="date">
          Published Date
        </label>
        <input className={styles.input} type="date" ref={EnteredpublishedDate} />
        <button className={styles.button}>Submit Data</button>
      </form>
    </div>
  );
};

export default AddBook;
