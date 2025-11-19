import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useState } from 'react'
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
import useUserStore from "../../stores/UserStore";
import z from "zod";

const userSchema = z.object({
    email: z.string().nonempty("Email não pode ser vazio").refine(value => z.string().email().safeParse(value).success, {
        message: "Email inválido"
    }),
    senha: z.string().nonempty("Senha não pode ser vazia").min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type LoginFormType = z.infer<typeof userSchema>

export default function FormLogin() {
    
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<LoginFormType>({
        resolver: zodResolver(userSchema)
    });

    const navigate = useNavigate();

    const login = useUserStore((state) => state.login);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function createUser(data : LoginFormType){
        setErrorMessage(null);
        try {
            const body = { email: data.email, password: data.senha };
            const resp = await axios.post('http://localhost:3333/sessions', body, {
                headers: { 'Content-Type': 'application/json' }
            });

            // CRIAR UMA PASTA E UM ARQUIVO SERVICES PARA FAZER AS FUNÇÕES DE LOGIN, LOGOUT, CADASTRO, ETC
            // DESSA FORMA SO PRECISA CHAMAR A FUNÇÃO QUE EL MESMO VAI FAZER TUDO QUE ESTA FAZENDO AQUI
            // ALÉM DISSO BOM CRIAR O API.TS PARA NAO CHAMAR O AXIOS TODA VEZ

            const { user, accessToken } = resp.data;
            try { localStorage.setItem('accessToken', accessToken); } catch {}
            login(user);
            reset();
            navigate("/");
        } catch (err: any) {
            const msg = 'Email ou senha incorreta';
            setErrorMessage(msg);
        }
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

                {errorMessage && <div className={styles.error} role="alert">{errorMessage}</div>}
            </div>


            <div className={styles.buttons}>
                <button className={styles.entrar} disabled={isSubmitting}>{isSubmitting ? "Carregando..." : "Entrar"}</button>
                <button className={styles.cadastrar} disabled >Cadastre-se</button>
            </div>
        </form>
    )
}