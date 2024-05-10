'use client'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import PrimerDiaAlbuferaPhotos from '@/services/primerDiaAlbufera'

const Granada: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    rerollImg()
  }, [])

  function rerollImg() {
    setImgSrc(
      `/fotets/primer-dia-albufera/${PrimerDiaAlbuferaPhotos.getRandom()}`
    )
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
