import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import { useForm } from "react-hook-form"
import type { User } from "../../Types/Users";
import userSchema from "../../Variables/UserSchema";
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
import useUserStore from "../../stores/UserStore";

export default function FormLogin() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<User>({
        resolver: zodResolver(userSchema)
    });

    const navigate = useNavigate();

    const login = useUserStore((state) => state.login);

    async function createUser(data : User){
        await new Promise(resolve => setTimeout(resolve, 2000));
        login(data);
        reset();
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(createUser)} className={styles.form}>
            <div className={styles.inputs}>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <p>E-mail</p>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        {...register("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <p>Senha</p>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        {...register("senha")}
                    />
                    {errors.senha && <span>{errors.senha.message}</span>}
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.entrar} disabled={isSubmitting}>{isSubmitting ? "Carregando..." : "Entrar"}</button>
                <button className={styles.cadastrar} disabled >Cadastre-se</button>
            </div>
        </form>
    )
}