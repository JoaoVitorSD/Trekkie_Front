import styles from '@/styles/Home.module.css'

export default function Card({label, category}){
    return (
      <div className={styles.card}>
        <label className={styles["card-label"]}>{label}</label>
        <img
          className={styles["card-png"]}
          src={`sports_pic/${category.toLowerCase()}.png`}
        ></img>
      </div>
    );
}