import { Link, useLoaderData } from "react-router-dom";
import type { Livro } from "../../Types/Livro";
import styles from "./styles.module.css";
import arrow from "../../assets/arrow.png";
import useCartStore from "../../stores/CartStore";

export default function Detalhes() {
    const detalhes = useLoaderData() as Livro;

    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div style={{margin: 'auto', maxWidth: '1320px'}}>

            <Link to={`/generos`} className={styles.header}>
                <img src={arrow} alt="Voltar" className={styles.arrow} />
                <h1 className={styles.titulo}>Detalhes do livro</h1>
            </Link>

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

            <div className={styles.buttonContainer}>
                <button 
                    className={styles.botao} 
                    onClick={() => {
                        addToCart(detalhes);
                        alert("Livro adicionado ao Carrinho!");
                    }}
                >
                    <p id="preco">R$ {detalhes.preco.toFixed(2)}</p>
                    <p>Adicionar ao carrinho</p>
                </button>
            </div>
        </div>
    )
}