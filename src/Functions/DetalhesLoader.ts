import type { LoaderFunctionArgs } from "react-router-dom";
import livros from '../livros.json';
import type { Livro } from '../Types/Livro';

export default function DetalhesLoader({ params } : LoaderFunctionArgs) {
    const { livroId } = params;

    if (!livroId) {
        throw new Response("Livro não encontrado", { status: 404 });
    }

    const detalhes = livros.livros.find((livro: Livro) => livro.id === Number(livroId));

    if (!detalhes) {
        throw new Response("Livro não encontrado", { status: 404 });
    }

    return detalhes;
}