import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
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
    const [termoPesquisa, setTermoPesquisa] = useState("");

    const livrosFiltrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    return (
        <div className={styles.container}>

            <input
                type="text"
                placeholder="Pesquisar por título"
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
                className={styles.input}
            />

            <Link to="/" className={styles.header}>
                <img src={arrow} alt="Voltar" className={styles.arrow} />
                <h1 className={styles.titulo}>{genero}</h1>
            </Link>

            <div className={styles.gridLivros}>
                {livrosFiltrados.map((livro: Livro) => (
                    <Link to={`//${genero}/${livro.id}`} key={livro.id} style={{textDecoration: 'none'}}>
                        <LivrosDoGenero livrosDoGenero={livro} />
                    </Link>
                ))}
            </div>

            {livrosFiltrados.length === 0 && termoPesquisa && (
                <div className={styles.naoEncontrado}>
                    <p>Nenhum livro encontrado com o termo "{termoPesquisa}"</p>
                </div>
            )}
        </div>
    )
}
