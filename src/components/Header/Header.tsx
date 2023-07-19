import styles from './Header.module.css';

interface HeaderProps {
    title: string;
}

export default function Header({ title = 'Header title' }: HeaderProps) {
    return (
        <header className={styles.title}>{title}</header>
    )
}
