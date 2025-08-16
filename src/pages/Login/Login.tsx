import FormLogin from "../../components/FormLogin/FormLogin";
import logo from "../../assets/Logo.png";
import livrariaimg from "../../assets/Livraria.png";
import styles from "./styles.module.css";

export default function Login() {
    return (
        <div className={styles.container}>
            <img src={livrariaimg} className={styles.livrariaimg} />

            <div className={styles.formContainer}>
                <img src={logo} alt="" />
                <div>
                    <p>Bem vindo(a)!</p>
                    <h1>Entre na sua conta</h1>
                </div>
                <FormLogin />
            </div>
            

        </div>
    )
}