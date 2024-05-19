import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './song-card.module.scss'
import { getCount } from '@/utils/format'
export default function SongCard ({data}: {data: any}) {
  return (
    <div className={styles['song-card']}>
      <div className={styles['img-box']}>
        <LazyLoadImage className={styles['card-img']} src={data.picUrl} alt="" />
        <div className={styles['img-box__bottom']}>
          <span className={styles['icon-listen']}></span>
          <span className={styles['play-num']}>{getCount(data.playCount)}</span>
          <span className={styles['icon-play']}></span>
        </div>
      </div>
      <div className={styles['song-name']}>{data.name}</div>
    </div>
  )
}