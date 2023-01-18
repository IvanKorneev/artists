import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import ArtistList from "../ArtistList/ArtistList";
import {Artist} from "../Types/Artist";

const Home = () => {

    const URL_ARTIST = ' http://localhost:3001/artists';
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        axios.get(URL_ARTIST).then(response => {
            setArtists(response.data)
        })
    }, [])
    return (
        <div>
            <Header/>
            <Banner/>
            <ArtistList allArtists={artists}/>
        </div>
    );
};
export default Home;
