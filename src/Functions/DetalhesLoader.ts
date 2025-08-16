import type { LoaderFunctionArgs } from "react-router-dom";
import axios from "axios";

export default async function DetalhesLoader({ params } : LoaderFunctionArgs) {
    const { livroId } = params;

    if (!livroId) {
        throw new Response("Livro não encontrado", { status: 404 });
    }

    try {
        const response = await axios.get(`http://localhost:3001/livros/${livroId}`);
        const livro = response.data;

        return livro;
        
    } catch (error) {
        throw new Response("Erro ao buscar livro", { status: 500 });
    }
}