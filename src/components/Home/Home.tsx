import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

    const URL_ARTIST = ' http://localhost:3001/artists';
    const [artists, setArtists] = useState('');

    useEffect(() => {
        axios.get(URL_ARTIST).then(response => {
            setArtists(response.data)
        })
    }, [])
    return (
        <div>
            Home
        </div>
    );
};
export default Home;
