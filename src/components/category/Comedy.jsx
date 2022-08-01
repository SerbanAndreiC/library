import { useEffect, useState} from "react"
import Book from "../Book/Book";


export default function Comedy() {

    const [comedy,setComedy]=useState([])

    useEffect(() => {
        gen35();
      }, []);
    
    
      
      const gen35 = async () => {
        const data = await fetch(   
          "https://api.themoviedb.org/3/discover/movie?api_key=3d9c99f340b79329065dd2e80e9c714e&with_genres=35"
        );
        const cat35 = await data.json();
        setComedy(cat35.results);
         console.log(cat35.results);
      };
      

      return(

        <div className="category">
             {comedy.map((book) => {
            return <Book key={book.id} book={book} />;
            })}
      </div>
      
      )

}