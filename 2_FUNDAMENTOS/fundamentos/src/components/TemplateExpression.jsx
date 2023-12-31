//"Template Expression" geralmente se refere ao uso de expressões JavaScript dentro de JSX (JavaScript XML)
function TemplasteExpression() {
    const nome = "Jessica"
    const data = {
        idade: 29,
        profissao: 'programador'
    }

    return(
        <div>
            <h1>meu nome e {nome}</h1>
            <h1>minha idade e {data.idade} e minha profissao e {data.profissao}</h1>
        </div>
    );
}

export default TemplasteExpression;