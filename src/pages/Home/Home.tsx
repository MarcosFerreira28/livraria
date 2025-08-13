import styles from './styles.module.css'
import type { Livro } from '../../Types/Livro';
import agruparLivrosPorGenero from '../../Functions/agruparLivrosPorGenero';
import LivrosPorGenero from '../../components/LivrosPorGenero/LivrosPorGenero';
import banner from '../../assets/Banner.png';

export default function Home () {

    const livrosPorGenero = agruparLivrosPorGenero();

    return (
        <div className={styles.home}>
            <img className={styles.imagemBanner} src={banner} alt="" />
            <p className={styles.textoBanner}><span style={{ color: "#F0B861", fontWeight: 800 }}>25% de desconto</span> nos livros do Paulo Coelho!</p>
            {Object.entries(livrosPorGenero).map(([genero, livrosDoGenero]) => (
                <LivrosPorGenero 
                    key={genero}
                    genero={genero}
                    livrosDoGenero={livrosDoGenero as Livro[]}
                />
            ))}
        </div>
    )
}