import { useEffect, useState} from "react"

import Book from "../Book/Book";

export default function Popular() {
    
    const [popular,setPopular]=useState([]);
    

    useEffect(() => {
        fetchPopular();
      }, []);
    
    
      const fetchPopular = async () => {
        const data = await fetch(
           "https://api.themoviedb.org/3/movie/popular?api_key=3d9c99f340b79329065dd2e80e9c714e&language=en-US&page=1"
        );
        const books = await data.json();
        setPopular(books.results);
         console.log(books.results);
      };
      

      return(

        <div className="category popular">
           
            {popular.map((book) => {
            return <Book key={book.id} book={book}/>;
            })}
          
      </div>
      
      )
}