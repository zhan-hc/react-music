import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { fetchHomeAsync } from '@/store/homeSlice'
import styles from './home.module.scss'
import WYHeader from '@/components/header/header'
import Banner from '@/components/banner/banner'
import SongList from '@/components/song/song-list/song-list'
import SongDj from '@/components/song/song-dj/song-dj'
import SongTop from '@/components/song/song-top/song-top'
import SongAlbum from '@/components/song/song-album/song-album'
import SongArtist from '@/components/song/song-artist/song-artist'
export default function Home () {
  const homeData = useSelector((state: RootState) => state.home)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchHomeAsync())
  }, []);
  return (
    <>
    <WYHeader />
    <Banner data={homeData.bannerList}></Banner>
    {
      homeData.initStatus && (
        <div className={styles['discover-box']}>
          <div className={styles['discover-left']}>
            <SongList data={homeData.playList}></SongList>
            <SongAlbum data={homeData.newAlbumList}></SongAlbum>
            <SongTop data={homeData.topList}></SongTop>
          </div>
          <div className={styles['discover-right']}>
            <SongArtist data={homeData.artistList}></SongArtist>
            <SongDj data={homeData.hotDjList}></SongDj>
          </div>
        </div>
      )
    }
    </>
  )
}