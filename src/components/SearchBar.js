import './SearchBar.css'
import { useState } from "react";



function SearchBar({ onSubmit  }){
   const[term,setTerm] = useState('');


    const handleFormSubmit= (event)=>{
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event)=>{
        setTerm(event.target.value);
    }
    const clear=(event)=>{
        event.preventDefault();
        setTerm('')
        onSubmit(term)
    }

    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
           <label id='lab'>Enter Search term &nbsp;</label>       
           <input value={term} onChange={handleChange}/>
           
        </form>
        <button onClick={clear}>Clear</button>
        
       
    </div>;
    
}


export default SearchBar;