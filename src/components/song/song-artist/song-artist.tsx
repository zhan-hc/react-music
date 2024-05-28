import styles from './song-artist.module.scss'
import SmallHeader from '../components/small-header/small-header'

export const ArtistCard = ({data, style}:any) => {
  return (
    <div className={styles['artist-card']} style={style}>
      <img className={styles['artist-img']} src={data.picUrl} alt="" />
      <div className={styles['artist-info']}>
        <span>{data.name}</span>
      </div>
    </div>
  )
}

export default function SongArtist ({data}: any) {
  return (
    <div className={styles['song-artist']}>
      <SmallHeader label="入驻歌手"></SmallHeader>
      {
      data.map((item: any) => {
        return (
          <ArtistCard style={{'marginTop': '20px'}} data={item} key={item.id}></ArtistCard>
        )
      })
      }
      <div className={styles['btn']}>申请成为网易音乐人</div>
    </div>
  )
}