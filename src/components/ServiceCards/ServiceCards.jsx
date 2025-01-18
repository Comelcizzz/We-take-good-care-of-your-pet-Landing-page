import styles from './ServiceCards.module.css'

export default function ServiceCards({src, title, description, color}) {
    return (

            <div className={styles.serviceCard}>
                <div className={styles.cardIcon} style={{backgroundColor: color}} >
                    <img src={src} alt="Pet care services" />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
    
    )
}
