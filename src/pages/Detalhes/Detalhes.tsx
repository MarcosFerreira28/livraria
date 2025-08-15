import { Link, useLoaderData } from "react-router-dom";
import type { Livro } from "../../Types/Livro";
import styles from "./styles.module.css";
import arrow from "../../assets/arrow.png";

export default function Detalhes() {
    const detalhes = useLoaderData() as Livro;

    return (
        <div style={{margin: 'auto', maxWidth: '1320px'}}>
            <div className={styles.header}>
                <Link to={`/generos/${detalhes.genero}`} style={{ height: "20px" }}>
                    <img src={arrow} alt="Voltar" className={styles.arrow} />
                </Link>
                <h1 className={styles.titulo}>Detalhes do livro</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.imagemLivro}>
                    <img src={detalhes.capa} alt="Capa do livro" />
                </div>
                <div className={styles.detalhesLivro}>
                    <div>
                        <h1>{detalhes.titulo}</h1>
                        <h2>{detalhes.autor}</h2>
                    </div>
                    <div>
                        <h3>Sinopse</h3>
                        <p>{detalhes.sinopse}</p>
                    </div>
                </div>
            </div>

            <button>
                <p>{detalhes.preco}</p>
                <p>Adicionar ao carrinho</p>
            </button>
        </div>
    )
}