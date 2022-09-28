import './App.css';
import Book from './Book';

function App() {

  //values
  const books = [
    {
      id:1,
      img: "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
      title: "Rich Dad Poor Dad",
      author: 'Robert T. Kiyosaki',
      },

    {
      id:2,
      img: "https://images-na.ssl-images-amazon.com/images/I/41v+g6LqafL._SX322_BO1,204,203,200_.jpg",
      title: "The Psychology of Money",
      author: 'Morgan Housel',
      },
  ];
  
  return (
    <>
      <section className='booklist'>{books.map((book)=>{
        return (<Book key={book.id} {...book}/>)
        })}
      </section>
    </>
  );
}

export default App;
