import type { Livro } from '../Types/Livro';

export default function agruparLivrosPorGenero(livros : Livro[]) {
        const livrosPorGenero: { [genero: string]: Livro[] } = {};
        
        livros.forEach((livro: Livro) => {
            if (!livrosPorGenero[livro.genero]) {
                livrosPorGenero[livro.genero] = [];
            }
            livrosPorGenero[livro.genero].push(livro);
        });
        
        return livrosPorGenero;
    };