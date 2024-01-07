import {useState} from 'React'
const Condicionais = () => {
    //Condicionais
    const [x] = useState(false)

    //Condicionais ternárias {condição ? (verdadeiro faça isso) : (falso faça isso)}
    const [nome] = useState('Jéssica')
    
    return (
        <div>
            {x && <p>Condicional && significa se x for true isso será exibido</p>}
            {!x && <p>Agora x é falso porque, se X é falso, !X se torna true, e true com && true, isso será exibido</p>}
            
            {nome === 'Jéssica' ? (<p>O nome é jéssica</p>) : (<p>O nome não é Jéssica</p>)}

        </div>

    )

}
export default Condicionais