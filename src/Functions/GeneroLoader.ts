import type { LoaderFunctionArgs } from 'react-router-dom';
import livros from '../livros.json';
import type { Livro } from '../Types/Livro';

export default function GeneroLoader({ params }: LoaderFunctionArgs) {
    const { genero } = params;
    
    if (!genero) {
        throw new Response("Gênero não encontrado", { status: 404 });
    }
    
    // Decodifica o parâmetro da URL (para lidar com espaços e caracteres especiais)
    const generoDecodificado = decodeURIComponent(genero);
    
    // Filtra os livros pelo gênero específico
    const livrosDoGenero = livros.livros.filter((livro: Livro) => 
        livro.genero.toLowerCase() === generoDecodificado.toLowerCase()
    );
    
    if (livrosDoGenero.length === 0) {
        throw new Response("Nenhum livro encontrado para este gênero", { status: 404 });
    }
    
    return {
        genero: generoDecodificado,
        livros: livrosDoGenero
    };
}
