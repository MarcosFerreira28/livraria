import type { Livro } from '../Types/Livro';
import livros from '../livros.json';

export default function agruparLivrosPorGenero() {
        const livrosPorGenero: { [genero: string]: Livro[] } = {};
        
        livros.livros.forEach((livro: Livro) => {
            if (!livrosPorGenero[livro.genero]) {
                livrosPorGenero[livro.genero] = [];
            }
            livrosPorGenero[livro.genero].push(livro);
        });
        
        return livrosPorGenero;
    };