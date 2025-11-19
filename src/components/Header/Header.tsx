import styles from './styles.module.css';
import LogoImg from "../../assets/Logo.png";
import ProfileImg from "../../assets/Profile.png";
import CartImg from "../../assets/Cart.png";
import { Link } from 'react-router-dom';
import useUserStore from "../../stores/UserStore";

export default function Header() {

    const isLogged = useUserStore((state) => state.isLogged);
    const logout = useUserStore((state) => state.logout);

    const user = useUserStore((s) => s.user)

    function handleLogout() {
        const confirmLogout = confirm("Realmente quer fazer o logout?");
        if (confirmLogout){
            logout();
        }
    }

    return (
        <header className={styles.header}>
            <Link to={"/"}><img className={styles.logo} src={LogoImg} alt="Logo" /></Link>
            <div className={styles.icons}>
                
                {isLogged ? (
                    <p>{user?.name}</p>
                ) : <Link to={"/login"}><img src={ProfileImg} alt="Profile" className={styles.profile}/></Link>
                }
                
                <Link to={"/cart"}><img src={CartImg} alt="Cart" className={styles.cart} /></Link>
                
                {isLogged ? (
                    <button className={styles.logout} onClick={handleLogout}>Logout</button>
                ) : null}

            </div>
        </header>
    )
}