import { Carousel } from 'antd'
import { useRef } from 'react';
import styles from './song-album.module.scss'
import BlockHeader from '@/components/block/block-header/block-header'
export const Album = ({data}: any) => {
 return (
  <div className={styles['album-box']}>
    <img className={styles['album-img']} src={data.coverUrl} alt="" />
    <div className={styles['album-bg']}></div>
    <span className={styles['album-name']}>{data.albumName}</span>
    <span className={styles['album-artist']}>{data.artistName}</span>
  </div>
 )
}
export default function SongAlbum ({data}: {data: any}) {
  const carouselRef = useRef<any>(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next()
    }
  };
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev()
    }
  };
  return (
    <div className={styles['song-box']}>
      <BlockHeader title='新碟上架'></BlockHeader>
      <div className={styles['block-content']}>
        <Carousel ref={carouselRef}>
            {
              [1,2].map((item: any) => {
                return (
                  <div className={styles['album-row']} key={item}>
                    {
                      data.slice(5 * (item - 1), 5 * item).map((album: any) => {
                        return (
                          <Album data={album} key={album.albumId}></Album>
                        )
                      })
                    }
                  </div>
                )
              })
            }
        </Carousel>
        <div className={styles.prev} onClick={handlePrev}></div>
        <div className={styles.next} onClick={handleNext}></div>
      </div>
    </div>
    
  )
}