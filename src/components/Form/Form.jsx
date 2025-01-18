import React, { useState, useEffect } from 'react'
import styles from './Form.module.css'

export default function Form({ setIsClicked }) {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
    })

    useEffect(() => {
        // Trigger the animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 10)

        return () => clearTimeout(timer)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsClicked(false) 
    }

    const handleClose = () => {
        setIsVisible(false)
        const timer = setTimeout(() => {
            setIsClicked(false)
        }, 300)
        return () => clearTimeout(timer)
    }

    return (
        <div className={`${styles.formContainer} ${isVisible ? styles.show : ''}`}>
            <div className={styles.formContent} onClick={e => e.stopPropagation()}>
                <button 
                    className={styles.closeButton}
                    onClick={handleClose}
                >
                    ×
                </button>
                <h2 className={styles.formTitle}>Schedule a Visit</h2>
                <form className={styles.formBody} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="tel"
                            name="phone"
                            className={styles.input}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="date"
                            name="date"
                            className={styles.input}
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="message"
                            className={styles.input}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Schedule a visit
                    </button>
                </form>
            </div>
        </div>
    )
}