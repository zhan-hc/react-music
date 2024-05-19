import styles from './header.module.scss'
import Tab, {TabChildItem} from './header-tab/header-tab'
export default function WYHeader () {
  return (
    <>
    <div className={styles['header-box']}>
      <div className={styles['m-top']}>
        <div className={styles.logo}>网易云音乐</div>
        <Tab />
      </div>
      <TabChildItem activeIndex={0}></TabChildItem>
    </div>
    </>
  )
}