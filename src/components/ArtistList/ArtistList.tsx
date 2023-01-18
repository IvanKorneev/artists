import './ArtistList.sass'
import {Artist} from "../Types/Artist";
import {Link} from "react-router-dom";

interface ArtistListProps {
    allArtists: Artist[]
}

const list = (allArtists: Artist[]) => {
    return allArtists ? allArtists.map(item => (<Link key={item.id} to={`/artist${item.id}`} className='artist_item'
    style={{background:`url('/images/covers/${item.cover}.jpg') no-repeat`}}>
        <div>
            {item.name}
        </div>
    </Link>)) : null;
}

const ArtistList = ({allArtists}: ArtistListProps) => {
    return (
        <div className='artists_list'>
            <h4>Browse the artists</h4>
            <div className='artists_container'>
                {list(allArtists)}
            </div>
        </div>
    );
};
export default ArtistList;