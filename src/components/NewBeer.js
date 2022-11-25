import Header from './Header';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function NewBeer() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { name: name, tagline: tagline, description: description, first_brewed: first_brewed, brewers_tips: brewers_tips, attenuation_level: attenuation_level, contributed_by: contributed_by }

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                // Reset the state
                setName("");
                setTagline("");
                setDescription("");
                setFirst_brewed("");
                setBrewers_tips("");
                setAttenuation_level(0);
                setContributed_by('');
                navigate('/');
            });
    };


    return (




        < div >
            <Header />

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label>Tagline</label>
                <input type='text' name='tagline' onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                />

                <label>Description</label>
                <input type='text' name='description' onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <label>First Brewed</label>
                <input type='text' name='first_brewed' onChange={(e) => setFirst_brewed(e.target.value)}
                    value={first_brewed}
                />

                <label>Brewers Tips</label>
                <input type='text' name='brewers_tips' onChange={(e) => setBrewers_tips(e.target.value)}
                    value={brewers_tips}
                />

                <label>Attenuation level</label>
                <input type='number' name='attenuation_level' onChange={(e) => setAttenuation_level(e.target.value)}
                    value={attenuation_level}
                />

                <label>Contributed by</label>
                <input type='text' name='contributed_by' onChange={(e) => setContributed_by(e.target.value)}
                    value={contributed_by}
                />
                <button type="submit">ADD NEW</button>



            </form>



        </div >
    )
}

export default NewBeer;