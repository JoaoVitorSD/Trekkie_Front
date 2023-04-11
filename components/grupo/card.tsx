import styles from '@/styles/Home.module.css'

export default function Card({label}:any){
    return (
           <div className={styles.card}>
            <label className={styles['card-label']}>{label}</label>
            <img className={styles['card-png']} src="corrida.png"></img>
          </div>
    )
}