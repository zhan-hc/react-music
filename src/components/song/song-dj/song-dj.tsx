import styles from './song-dj.module.scss'
import SmallHeader from '../components/small-header/small-header'

export const DjCard = ({data, style}:any) => {
  return (
    <div className={styles['dj-card']} style={style}>
      <img className={styles['dj-img']} src={data.avatarUrl} alt="" />
      <div className={styles['dj-info']}>
        <span>{data.nickName}</span>
      </div>
    </div>
  )
}

export default function SongDj ({data}: any) {
  return (
    <div className={styles['song-dj']}>
      <SmallHeader label="热门主播" rightContent=""></SmallHeader>
      {
      data.map((item: any) => {
        return (
          <DjCard style={{'marginTop': '20px'}} data={item} key={item.id}></DjCard>
        )
      })
      }
    </div>
  )
}