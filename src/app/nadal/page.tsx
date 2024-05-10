'use client'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import NadalPhotos from '@/services/nadal'

const Granada: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    rerollImg()
  }, [])

  function rerollImg() {
    setImgSrc(`/fotets/nadal/${NadalPhotos.getRandom()}`)
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
