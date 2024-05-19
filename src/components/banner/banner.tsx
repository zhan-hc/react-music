import { Carousel } from 'antd'
import React, { useRef } from 'react';
import styles from './banner.module.scss'


const BannerItem = ({imageUrl}: {imageUrl:string}) => {
  const itemStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl}?imageView&blur=40x20)`,
    backgroundSize: '6000px',
    backgroundPosition: 'center center'
  };
  return (
    <div style={itemStyle}>
      <div className={styles['banner-item']}>
        <img className={styles['banner-item__img']} src={imageUrl} alt="" />
        <div className={styles.download}></div>
      </div>
    </div>
  )
}

export default function Banner ({data = []}: {data:any}) {
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
  <>
    <div className={styles['banner-box']}>
        <Carousel autoplay ref={carouselRef}>
          {
            data.map((item:any, i:number) => {
              return (
                <BannerItem imageUrl={item.imageUrl} key={i}/>
              )
            })
          }
        </Carousel>
        <img className={styles.prev} src="https://s2.music.126.net/style/web2/img/ie6/arrr.png?=1" alt="" onClick={handlePrev}/>
        <img className={styles.next} src="https://s2.music.126.net/style/web2/img/ie6/arrr.png?=1" alt="" onClick={handleNext}/>
    </div>
   
  </>)
}