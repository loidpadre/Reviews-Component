import { useState } from "react"
import {FaAngleLeft, FaAngleRight, FaQuoteLeft} from "react-icons/fa"

export default function Card({list, setList}){

    const[index, setIndex] = useState(0)
    const fisrtItem = list[index]

    function handleLeft(e) {
        e.preventDefault();
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setIndex(list.length - 1);
        }
      }
    
      function handleRight(e) {
        e.preventDefault();
        if (index < list.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }

      function handleRandom(e){
        e.preventDefault();
        const randomIndex = Math.floor(Math.random() * list.length);
        setIndex(randomIndex);
      }

    return(
        <div className="card">
            <div className="icon"><FaQuoteLeft/></div>
           <img src={fisrtItem.image} alt={fisrtItem.text} />
           <h1>{fisrtItem.name}</h1>
           <p className="job">{fisrtItem.job.toUpperCase()}</p>
           <p className="text">{fisrtItem.text}</p>
            <div>
                <button onClick={handleLeft}><FaAngleLeft/></button>
                <button onClick={handleRight}><FaAngleRight/></button>
            </div>
            <button className="btn" onClick={handleRandom}>Me supreenda</button>
        </div>
    )
}