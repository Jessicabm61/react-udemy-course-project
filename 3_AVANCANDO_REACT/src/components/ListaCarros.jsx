// Definindo um componente funcional chamado ListaCarros
const ListaCarros = () => {
    // Criando uma array chamada 'carros' com dois elementos ('fox' e 'fusca')
    const carros = ['fox', 'fusca'];

    const ListaMap = carros.map((carro, index) => (
        <li key={index}>{index} - {carro}</li>
    ));

    // Retornando JSX que representa a estrutura do componente
    return (
        <div>
            {/* Renderizando um parágrafo (p) que contém a representação da array 'carros' */}
            <p>{carros}</p>
            <div>
                <ul>{ListaMap}</ul>
            </div>
        </div>
    );
}

// Exportando o componente ListaCarros para que possa ser utilizado em outros arquivos
export default ListaCarros;
