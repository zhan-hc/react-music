import styles from './small-header.module.scss'
export default function SmallHeader ({label, rightContent = '查看更多'}: any) {
  return (
    <div className={styles['song-header']}>
      <span className={styles['header-label']}>{label}</span>
      {
        rightContent && <span className={styles['header-right']}>{rightContent}{' >'}</span>
      }
      
    </div>
  )
}