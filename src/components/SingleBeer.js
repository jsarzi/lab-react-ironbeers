import Header from './Header';
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from "react";

function SingleBeer() {

    const [beers, setBeers] = useState({})
    const params = useParams();
    const id = params.id;


    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                console.log(response.data);
                setBeers(response.data)


            })
    }, [id])




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


export default SingleBeer;