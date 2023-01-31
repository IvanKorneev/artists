import {useEffect, useState} from "react";
import {Artist} from "../Types/Artist";
import './Artist.sass';
import axios from "axios";
import {RouteComponentProps} from "react-router-dom";
import AlbumList from "../AlbumList/AlbumList";


const ArtistInfo = ({match}: RouteComponentProps<{ artistid: string }>) => {
    const URL_ARTIST = ' http://localhost:3001/artists'
    const [artistInfo, setArtistInfo] = useState<Artist>({} as Artist);
    useEffect(() => {
        axios.get(`${URL_ARTIST}/${match.params.artistid}`).then(response => {
            setArtistInfo(response.data)
        })
    }, [])
    return (
        <>
            <div className='artist_bio'>
                <div className='avatar'>
                    <span style={{
                        background: `url('/images/covers/${artistInfo.cover}.jpg') no-repeat`
                    }}>
                    </span>
                </div>
                <div className='bio'>
                    <h3>{artistInfo.name}</h3>
                    <div className='bio_text'>
                        {artistInfo.bio}
                    </div>
                </div>
                <AlbumList albumList={artistInfo.albums}/>
            </div>
        </>
    );
};
export default ArtistInfo;