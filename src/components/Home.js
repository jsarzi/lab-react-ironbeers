import { Link } from 'react-router-dom';
import allbeers from '../assets/beers.png'
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png'


function Home() {
    return (

        <div>
            <div className="card">
                <img src={allbeers} alt='' />
                <Link to='/beers' className='titre'>All Beers</Link>
                <p>Lorem Lorem</p>

            </div>

            <div className="card">
                <img src={randombeer} alt='' />
                <Link to='/random-beer' className='titre'>Random Beer</Link>
                <p>Lorem Lorem</p>

            </div>


            <div className="card">
                <img src={newbeer} alt='' />
                <Link to='/new-beer' className='titre'>New Beer</Link>
                <p>Lorem Lorem</p>

            </div>
        </div>
    )
}


export default Home;

