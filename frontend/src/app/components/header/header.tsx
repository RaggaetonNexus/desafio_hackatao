import styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className={styles.accessibilityBar}>
                <p>Contraste</p>
                <p>Aumentar Fonte</p>
                <p>Diminuir Fonte</p>
                <p>Libras</p>
            </div>
        </header>
    )
}
