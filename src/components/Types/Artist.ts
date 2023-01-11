import {Album} from "./Album";

export interface Artist {
    albums: Album[],
    bio: string,
    cover: string,
    genre: string,
    id: number,
    name: string
}