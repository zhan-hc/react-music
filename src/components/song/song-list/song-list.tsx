import styles from './song-list.module.scss'
import BlockHeader from '@/components/block/block-header/block-header'
import SongCard from '../song-card/song-card'
const HeaderTab = () => {
  const tabs = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <div className={styles['tab-box']}>
      {
        tabs.map((item, i) => {
          return (
            <div key={i} className={styles['tab-item']}>{item}</div>
          )
        })
      }
    </div>
  )
}

export default function SongList ({data}: {data: any}) {
  return (
    <div className={styles['song-box']}>
      <BlockHeader title='热门推荐' subContent={HeaderTab()}></BlockHeader>
      <div className={styles['block-content']}>
        {
          data.map((item:any) => {
            return (
              <div className={styles['block-item']} key={item.id}>
                <SongCard data={item}></SongCard>
              </div>
            )
          })
        }
        
      </div>
    </div>
    
  )
}