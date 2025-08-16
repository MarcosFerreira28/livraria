import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import { useForm } from "react-hook-form"
import type { User } from "../../Types/Users";
import userSchema from "../../Variables/UserSchema";
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}, setError} = useForm<User>({
        resolver: zodResolver(userSchema)
    });

    const navigate = useNavigate();

    async function createUser(data : User){
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        reset();
        navigate("/generos");
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
                <button className={styles.cadastrar}>Cadastre-se</button>
            </div>
        </form>
    )
}