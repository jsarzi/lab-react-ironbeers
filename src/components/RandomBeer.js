import Header from './Header';
import axios from "axios"
import { useState, useEffect } from "react";

function RandomBeer() {

    const [beers, setBeers] = useState({})
    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                console.log(response.data);
                setBeers(response.data)


            })
    }, [])

    return (

        <div>
            <Header />
            <div>
                <img src={beers.image_url} alt="" />
                <p>{beers.name}</p>
                <p>{beers.tagline}</p>
                <p>{beers.first_brewed}</p>
                <p>{beers.attenuation_level}</p>
                <p>{beers.description}</p>
                <p>{beers.contributed_by}</p>
            </div>
        </div>
    )
}

export default RandomBeer;