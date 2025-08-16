import useCartStore from "../../stores/CartStore";

export default function Cart(){
    
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const total = cart.reduce((acc, livro) => acc + livro.preco, 0);
    return(
        <>
            <h1>Carrinho de Compras</h1>
            <ul>
                {cart.map((livro, indice) => (
                    <li key={indice}>
                        <span>{livro.titulo} - R$ {livro.preco.toFixed(2)}</span>
                        <button onClick={() => removeFromCart(livro.id)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h2>Total: R$ {total.toFixed(2)}</h2>
        </>
    )
}