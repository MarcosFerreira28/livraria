import { Link, useLoaderData } from "react-router-dom";
import type { Livro } from "../../Types/Livro";
import arrow from "../../assets/arrow.png";
import LivrosDoGenero from "../../components/LivrosDoGenero/LivrosDoGenero";
import styles from './styles.module.css';

type GeneroPageData = {
    genero: string;
    livros: Livro[];
};

export default function Genero() {
    const { genero, livros } = useLoaderData() as GeneroPageData;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/generos"><img src={arrow} alt="Voltar" className={styles.arrow} /></Link>
                <h1 className={styles.titulo}>{genero}</h1>
            </div>

            <div className={styles.gridLivros}>
                {livros.map((livro: Livro) => (
                    <LivrosDoGenero key={livro.id} livrosDoGenero={livro} />
                ))}
            </div>
        </div>
    )
}
