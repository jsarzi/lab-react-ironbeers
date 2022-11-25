
import axios from 'axios';
import { useState, useEffect } from "react";
// Iteration 5
function Search({ searchString, setSearchString }) {
    // const [query, setQuery] = useState("");


    function handleSearch(e) {
        e.preventDefault();
        setSearchString(e.target.value);

    }

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchString}`)
            .then(({ data }) => {
                console.log(data)
            })
    })

    return (
        <>


            <label>Search</label>
            <input value={searchString} type="text" onChange={handleSearch} />
        </>
    );
}

export default Search;