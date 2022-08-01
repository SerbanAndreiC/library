import { useEffect, useState} from "react"
import Book from "../Book/Book";


export default function Action() {

    const [action,setAction]=useState([])

    useEffect(() => {
        gen28();
      }, []);
    
    
      
      const gen28 = async () => {
        const data = await fetch(   
          "https://api.themoviedb.org/3/discover/movie?api_key=3d9c99f340b79329065dd2e80e9c714e&with_genres=28"
        );
        const cat28 = await data.json();
        setAction(cat28.results);
         console.log(cat28.results);
      };
      

      return(

        <div className="category">
             {action.map((book) => {
            return <Book key={book.id} book={book} />;
            })}
      </div>
      
      )

}