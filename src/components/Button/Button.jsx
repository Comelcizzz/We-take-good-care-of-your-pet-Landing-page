import styles from './Button.module.css'

export default function Button({ children, onClick }) {
    return (
        <button 
            className={styles.scheduleButton}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
