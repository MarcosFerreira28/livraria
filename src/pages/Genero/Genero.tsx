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

            <div className={styles.header}>
                <Link to="/generos" style={{height: "20px"}}><img src={arrow} alt="Voltar" className={styles.arrow} /></Link>
                <h1 className={styles.titulo}>{genero}</h1>
            </div>

            <div className={styles.gridLivros}>
                {livrosFiltrados.map((livro: Livro) => (
                    <LivrosDoGenero key={livro.id} livrosDoGenero={livro} />
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
