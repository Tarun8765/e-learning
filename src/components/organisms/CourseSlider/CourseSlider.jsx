import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import './embla.css';
import brand1 from '../../../../public/images/slider/brand_1.png';
import brand2 from '../../../../public/images/slider/brand_2.png';
import brand3 from '../../../../public/images/slider/brand_3.png';
import brand4 from '../../../../public/images/slider/brand_4.png';
import brand5 from '../../../../public/images/slider/brand_5.png';
import star from '../../../../public/images/slider/brand_star.svg'

export default function CourseSlider(props) {
    const OPTIONS = { loop: true }
    const SLIDES = [{src:brand1,alt:'brand1',link:'#'}, {src:brand2,alt:'brand2',link:'#'}, {src:brand3,alt:'brand3',link:'#'}, {src:brand4,alt:'brand4',link:'#'}, {src:brand5,alt:'brand5',link:'#'},{src:brand1,alt:'brand1',link:'#'}, {src:brand2,alt:'brand2',link:'#'}, {src:brand3,alt:'brand3',link:'#'}, {src:brand4,alt:'brand4',link:'#'}, {src:brand5,alt:'brand5',link:'#'}]
    const { slides=SLIDES, options=OPTIONS } = props
  

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
      AutoScroll({ playOnInit: false })
    ])
    const [isPlaying, setIsPlaying] = useState(false)
  
  
    const toggleAutoplay = useCallback(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return
  
      const playOrStop = autoScroll.isPlaying()
        ? autoScroll.stop
        : autoScroll.play
      playOrStop()
    }, [emblaApi])
  
    useEffect(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll.play()
      if (!autoScroll) return
  
      setIsPlaying(autoScroll.isPlaying())
      emblaApi
        .on('autoScroll:play', () => setIsPlaying(true))
        .on('autoScroll:stop', () => setIsPlaying(false))
        .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])
  
    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" >
            {slides.map((data,index) => (
              <div className="embla__slide" key={index} onMouseOver={toggleAutoplay} onMouseOut={toggleAutoplay}>
                <div className="embla__slide__number">
                    <a href={data?.link}>
                        <img src={data?.src} alt={data.alt}/>
                    </a>
                    <img src={star} alt='star'/>
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
