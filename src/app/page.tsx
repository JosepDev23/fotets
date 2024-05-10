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
      <article onClick={handleClickGranada} className={styles.card_wrapper}>
        <img src="/fotets/cumple-clara/IMG_20231121_210725324.jpg" />
        <img src="/fotets/granada/granada.png" />
      </article>
      <article onClick={handleClickGranada} className={styles.card_wrapper}>
        <img src="/fotets/cumple-josep/IMG_20230823_185100.jpg" />
        <img src="/fotets/granada/granada.png" />
      </article>
      <article onClick={handleClickGranada} className={styles.card_wrapper}>
        <img src="/fotets/nadal/IMG_20231202_191907774.jpg" />
        <img src="/fotets/granada/granada.png" />
      </article>
      <article onClick={handleClickGranada} className={styles.card_wrapper}>
        <img src="/fotets/primer-dia-albufera/IMG_20231118_175028425.jpg" />
        <img src="/fotets/granada/granada.png" />
      </article>
      <article onClick={handleClickGranada} className={styles.card_wrapper}>
        <img src="/fotets/random/IMG_20230707_204847.jpg" />
        <img src="/fotets/granada/granada.png" />
      </article>
    </main>
  )
}
