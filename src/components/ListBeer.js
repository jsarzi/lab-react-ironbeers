import Header from './Header';
import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from './Search';

function ListBeer() {
    const [searchString, setSearchString] = useState("");

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response.data);
                setBeers(response.data)


            })
    }, [])

    return (
        <div>

            <Header />
            <Search {...{ searchString, setSearchString }} />


            {beers.map((beerList) => {
                return (
                    <div key={beerList._id}>
                        <Link to={`/beers/${beerList._id}`}
                        >
                            <img src={beerList.image_url} alt='' />
                            <p> {beerList.name}</p>
                            <p>{beerList.tagline}</p>
                            <p>Created by:{beerList.contributed_by}</p>





                        </Link>
                    </div>
                )
            })}






        </div>
    )
}
export default ListBeer;