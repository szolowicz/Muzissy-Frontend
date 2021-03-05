import ISong from './song';

export default interface IPlaylist {
  name: string;
  img: string;
  songs: ISong[];
  difficulty: string;
  createdAt: Date;
}
