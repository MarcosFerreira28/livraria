import type { LoaderFunctionArgs } from 'react-router-dom';
import axios from 'axios';

export default async function GeneroLoader({ params }: LoaderFunctionArgs) {
    const { genero } = params;

    if (!genero) {
        throw new Response("Gênero não encontrado", { status: 404 });
    }
    
    try{
        const response = await axios.get(`http://localhost:3001/livros?genero=${genero}`);
        const livros = response.data;

        return {
            genero: genero,
            livros: livros
        };

    }catch (e){
        throw new Response("Erro ao buscar livros", { status: 500 });
    }
}
