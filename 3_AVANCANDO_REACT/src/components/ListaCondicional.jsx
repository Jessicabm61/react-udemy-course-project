function ListaCondicional({itens}) {

    return (
        <div>
            {itens && itens.length > 0 ? (
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>{item.nome} - {item.idade}</li>
                    ))}
                </ul>
            ) : (
                <h3>A lista está vazia</h3>
            )}
        </div>
    );
}

export default ListaCondicional;
