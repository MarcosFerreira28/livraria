import styles from './styles.module.css'
import type { Livro } from '../../Types/Livro';
import agruparLivrosPorGenero from '../../Functions/agruparLivrosPorGenero';
import LivrosPorGenero from '../../components/LivrosPorGenero/LivrosPorGenero';
import banner from '../../assets/Banner.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home () {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/livros")
        .then(response => setLivros(response.data))
        .catch(error => console.error("Erro ao buscar livros:", error));
    }, [])

    const livrosPorGenero = agruparLivrosPorGenero(livros);

    return (
        <div className={styles.home}>
            <div className={styles.bannerContainer}>
                <img className={styles.imagemBanner} src={banner} alt="" />
                <p className={styles.textoBanner}><span style={{ color: "#F0B861", fontWeight: 800 }}>25% de desconto</span> nos livros do Paulo Coelho!</p>
            </div>
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