import { Link } from 'react-router-dom';
import type { Livro } from '../../Types/Livro';
import styles from './styles.module.css';

type LivrosDoGeneroProps = {
    livrosDoGenero: Livro;
};

export default function LivrosDoGenero({ livrosDoGenero }: LivrosDoGeneroProps) {
    return (
        <div className={styles.containerLivro}>
            <img className={styles.imagem} src={livrosDoGenero.capa} alt="imagem da capa do livro" />
            <div className={styles.containerInfo}>
                <div style={{ overflow: "auto" }}>
                    <h3 className={styles.titulo}>{livrosDoGenero.titulo}</h3>
                    <p className={styles.autor}>{livrosDoGenero.autor}</p>
                </div>
                <span className={styles.preco}>R$ {livrosDoGenero.preco.toFixed(2)}</span>
            </div>
        </div>
    )
}