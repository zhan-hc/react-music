import styles from './header-tab.module.scss'
import classNames from 'classnames';

const TabItem = ({ label, isActive, onClick }: {label: string,isActive: boolean, onClick?: any}) => {
  const tabItemClass = classNames(styles['tab-item'], {
      [styles['tab-item--active']]: isActive,
  })
  return (
      <div className={tabItemClass} onClick={onClick}>
          {label}
      </div>
  )
}

export const TabChildItem = ({activeIndex = 0}: {activeIndex?: number}) => {
  const tabChlidMenu = ['推荐', '排行榜', '歌单', '主播电台', '歌手', '新碟上架']
  const tabItemClass = (i: number) => classNames(styles['tab-child__item'], {
    [styles['tab-child__item--active']]: activeIndex === i,
})
  return (
    <div className={styles['tab-child__box']}>
      {
        tabChlidMenu.map((tab, i) => {
          return <div  key={i} className={tabItemClass(i)}>{tab}</div>
        })
      }
    </div>
  )
}

export default function header () {
  const tabList = ['发现音乐', '我的音乐', '关注', '商城', '音乐人', '云推歌', '下载客户端']
  const activeTab = 0
  return (
    <>
    <div className={styles['tab-box']}>
      {
        tabList.map((tab, i) => {
          return <TabItem key={i} label={tab} isActive={i === activeTab} />
        })
      }
    </div>
      
    </>
  )
}