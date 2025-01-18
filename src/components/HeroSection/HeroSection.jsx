import BG from '../../assets/BG.png'
import Cat2 from '../../assets/Cat2.png'
import styles from './HeroSection.module.css'
import Form from '../Form/Form'

export default function HeroSection() {

    return (
        <div className={styles.heroContainer}>
            <div className={styles.background} style={{ backgroundImage: `url(${BG})` }} />
            
            <div className={styles.content}>
                <div className={styles.leftSection}>
                    <h1 className={styles.title}>We take good care of your pet</h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus imperdiet sed id elementum. Quam vel aliquam
                        sit vulputate. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                </div>

                <div className={styles.rightSection}>
                    <img src={Cat2} alt="Cute cat" className={styles.catImage} />
                </div>
            </div>

        </div>
    )
}
