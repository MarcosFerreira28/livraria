import livros from '../livros.json';

export default function GenerosLista() {
    const generos: string[] = [];
    livros.livros.forEach(livro => {
        if (livro.genero && !generos.includes(livro.genero)) {
            generos.push(livro.genero);
        }
    });
    return generos;
}
