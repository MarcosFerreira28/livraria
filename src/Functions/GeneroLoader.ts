import type { LoaderFunctionArgs } from 'react-router-dom';
import livros from '../livros.json';
import type { Livro } from '../Types/Livro';

export default function GeneroLoader({ params }: LoaderFunctionArgs) {
    const { genero } = params;
    
    if (!genero) {
        throw new Response("Gênero não encontrado", { status: 404 });
    }
    
    const generoDecodificado = decodeURIComponent(genero); //pega o genero da url
    
    const livrosDoGenero = livros.livros.filter((livro: Livro) => 
        livro.genero.toLowerCase() === generoDecodificado.toLowerCase()
    ); //pega os livros do genero da url
    
    if (livrosDoGenero.length === 0) {
        throw new Response("Nenhum livro encontrado para este gênero", { status: 404 });
    }
    
    return {
        genero: generoDecodificado,
        livros: livrosDoGenero
    };
}
