// import { Link } from "react-router-dom";
import{FaStar, FaCalendar} from 'react-icons/fa';

export default function Book({ book }) {
  return (
    <div className="card">
        <h2 className="card-title">{book.title}</h2>
        <img
            className="card-img"
          src={"https://image.tmdb.org/t/p/w300" + book.backdrop_path}
          alt="ceva"
        />
            <div className="card-description">
		        <p ><FaCalendar className="release-date"/>{book.release_date}</p>
		        <p ><FaStar className="rate"/>{book.vote_average}</p>
	        </div>
    </div>
  );
}