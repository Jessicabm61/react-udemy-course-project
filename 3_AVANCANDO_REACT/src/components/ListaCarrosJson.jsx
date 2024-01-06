// Definindo um componente funcional chamado ListaCarros
const ListaCarrosJson = () => {
    
    const carros = [{modelo: 'fox', ano: 2008}, 
                    {modelo: 'fusca', ano: 1994}];

    const ListaMap = carros.map((carro, index) => (
        <li key={index}>{index} - {carro.modelo} ano {carro.ano}</li>
    ));

    // Retornando JSX que representa a estrutura do componente
    return (
        <div>
            <div>
                <ul>{ListaMap}</ul>
            </div>
        </div>
    );
}

// Exportando o componente ListaCarrosJson para que possa ser utilizado em outros arquivos
export default ListaCarrosJson;
