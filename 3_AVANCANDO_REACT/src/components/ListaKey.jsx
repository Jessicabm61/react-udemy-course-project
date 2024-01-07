// Definindo um componente funcional chamado ListaCarros
const ListaKey = () => {
    
    // Definindo um Arquivo Json
    const carros = [{id: 4243, modelo: 'fox', ano: 2008}, 
                    {id: 3424, modelo: 'fusca', ano: 1994}];

    const ListaMap = carros.map((carro) => (
        <li key={carro.id}>{carro.id} - {carro.modelo} ano {carro.ano}</li>
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
export default ListaKey;
