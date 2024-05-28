import styles from './song-top.module.scss'
import BlockHeader from '@/components/block/block-header/block-header'

export const TopItem = ({ data }: any) => {
  return (
    <dl className={styles['top-list']}>
      <dt className={styles['top-header']}>
        <img className={styles['top-img']} src={data.coverImgUrl} alt="" />
        <div className={styles['top-info']}>
          <span className={styles['top-name']}>{data.name}</span>
          <div className={styles['icon-box']}>
            <div className={styles['icon-play']}></div>
            <div className={styles['icon-add']}></div>
          </div>
        </div>
      </dt>
      <dd>
        <ol>
          {
            data.tracks.map((item: any, i: number) => {
              return (
                <li  className={styles['top-item']} key={i}>
                  <span className={styles['item-num']}>{i + 1}</span>
                  <span className={styles['item-name']}>{item.first}</span>
                </li>
              )
            })
          }
        </ol>
      </dd>
    </dl>
  )
}

export default function SongTop ({data}: {data: any}) {
  return (
    <div className={styles['song-box']}>
      <BlockHeader title='榜单'></BlockHeader>
      <div className={styles['block-content']}>
        {
          data.slice(0, 3).map(((list: any) => {
            return (
              <TopItem data={list} key={list.id}></TopItem>
            )
          }))
        }
        
      </div>
    </div>
    
  )
}