import styles from './block-header.module.scss'

interface headerProps {
  title: string,
  subContent?: any,
}

export default function blockHeader ({ title, subContent }: headerProps) {
  return (
    <>
      <div className={styles['block-box']}>
        <div className={styles['block-pre']}></div>
        <div className={styles['block-title']}>
          {title}
        </div>
        <div className={styles['block-slot']}>
          {subContent}
        </div>
        <div className={styles['block-right']}>
          更多
          <div className={styles['block-right__icon']}></div>
        </div>
      </div>
    </>
  )
}