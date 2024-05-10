'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()

  function handleClickGranada() {
    setTimeout(() => {
      router.push('granada')
    }, 1000)
  }

  function handleClickPrimerDia() {
    setTimeout(() => {
      router.push('primer-dia')
    }, 1000)
  }

  return (
    <main className={styles.main}>
      <article onClick={handleClickPrimerDia} className={styles.card_wrapper}>
        <img src="/fotets/primer-dia/IMG_20230623_201242.jpg" />
        <img src="/fotets/primer-dia/primer-dia.png" />
      </article>
      <article onClick={handleClickGranada} className={styles.card_wrapper}>
        <img src="/fotets/granada/IMG_20240404_194145803.jpg" />
        <img src="/fotets/granada/granada.png" />
      </article>
    </main>
  )
}
