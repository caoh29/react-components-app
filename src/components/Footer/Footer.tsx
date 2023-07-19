import styles from './Footer.module.css';

interface FooterProps {
    title: string;
    children: React.ReactNode;
}

export default function Footer({ title = 'Footer title', children }: FooterProps) {
    return (
        <footer className={styles.footer}>
            <h5 className={styles.title}>{title}</h5>
            {children}
        </footer>
    )
}
