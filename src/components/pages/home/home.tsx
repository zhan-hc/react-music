import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { fetchHomeAsync } from '@/store/homeSlice'
import styles from './home.module.scss'
import WYHeader from '@/components/header/header'
import Banner from '@/components/banner/banner'
import SongList from '@/components/song/song-list/song-list'
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
    <div className={styles['discover-box']}>
      <SongList data={homeData.playList}></SongList>
      <div className={styles['discover-right']}>
        右边区域
      </div>
    </div>
    </>
  )
}