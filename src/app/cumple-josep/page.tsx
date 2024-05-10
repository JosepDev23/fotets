'use client'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import CumpleJosepPhotos from '@/services/cumpleJosep'

const Granada: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    rerollImg()
  }, [])

  function rerollImg() {
    setImgSrc(`/fotets/cumple-josep/${CumpleJosepPhotos.getRandom()}`)
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
