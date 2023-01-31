import './AlbumList.sass';
import {Album} from "../Types/Album";


interface albumProps {
    albumList: Album[]
}

const showList = (albumList: Album[]) => {
    return albumList ? albumList.map((item, index) => {
        return (
            <div className='albums_list_item'>
                <img key={index} alt={item.title} src={`/images/albums/${item.cover}.jpg`}/>
            </div>
        )
    }) : null
}
const AlbumList = ({albumList}: albumProps) => {
    return (

        <div className='albums_list'>
            {showList(albumList)}
        </div>
    )
};
export default AlbumList;