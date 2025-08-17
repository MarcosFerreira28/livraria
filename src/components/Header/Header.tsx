import styles from './styles.module.css';
import LogoImg from "../../assets/Logo.png";
import ProfileImg from "../../assets/Profile.png";
import CartImg from "../../assets/Cart.png";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to={"/generos"}><img className={styles.logo} src={LogoImg} alt="Logo" /></Link>
            <div className={styles.icons}>
                <img src={ProfileImg} alt="Profile" />
                <Link to={"/generos/cart"}><img src={CartImg} alt="Cart" className={styles.cart} /></Link>
            </div>
        </header>
    )
}