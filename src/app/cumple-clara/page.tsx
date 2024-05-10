'use client'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import CumpleClaraPhotos from '@/services/cumpleClara'

const Granada: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    rerollImg()
  }, [])

  function rerollImg() {
    setImgSrc(`/fotets/cumple-clara/${CumpleClaraPhotos.getRandom()}`)
  }

  return (
    <main>
      <img className={style.img} src={imgSrc} />
      <button className={style.btn} onClick={rerollImg}>
        REROLL
      </button>
    </main>
  )
}

export default Granada
