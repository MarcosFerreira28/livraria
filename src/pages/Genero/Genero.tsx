import { useLoaderData } from "react-router-dom";
import type { Livro } from "../../Types/Livro";

type GeneroPageData = {
    genero: string;
    livros: Livro[];
};

export default function Genero() {
    const { genero, livros } = useLoaderData() as GeneroPageData;

    return (
        <>
            <div>
                <h1>Gênero: {genero}</h1>
                <p>Total de livros: {livros.length}</p>
            </div>

            <div>
                {livros.map((livro: Livro) => (
                    <div key={livro.id}>
                    </div>
                ))}
            </div>
        </>
    )
}
