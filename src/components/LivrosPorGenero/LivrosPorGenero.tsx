import { Link } from 'react-router-dom';
import type { Livro } from '../../Types/Livro';
import styles from './styles.module.css';

type LivrosPorGeneroProps = {
    genero: string;
    livrosDoGenero: Livro[];
};

export default function LivrosPorGenero({ genero, livrosDoGenero }: LivrosPorGeneroProps) {
    return (
        <div className={styles.container}>
            <div className={styles.tituloContainer}>
                <h2 className={styles.genero}>{genero}</h2>
                <Link to={`/${genero}`}><button className={styles.verMais}>Ver mais</button></Link>
            </div>
            <div className={styles.containerLivros}>
                {(livrosDoGenero as Livro[]).slice(0, 4).map((livro: Livro) => (
                    <Link to={`/${livro.genero}/${livro.id}`} className={styles.containerLivro} key={livro.id}>
                        <img className={styles.imagem} src={livro.capa} alt="imagem da capa do livro" />
                        <div className={styles.containerInfo}>
                            <div style={{ overflow: "auto" }}>
                                <h3 className={styles.titulo}>{livro.titulo}</h3>
                                <p className={styles.autor}>{livro.autor}</p>
                            </div>
                            <span className={styles.preco}>R$ {livro.preco.toFixed(2)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}