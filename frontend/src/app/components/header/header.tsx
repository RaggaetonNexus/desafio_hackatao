import styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className={styles.accessibilityBar}>
                <button>Contraste</button>
                <button>Aumentar Fonte</button>
                <button>Diminuir Fonte</button>
                <button>Libras</button>
            </div>

            
        </header>
    )
}
