import {useState} from 'react';

function Contador () {
    const [contador, setContador] = useState(1);

    function AtualizaContador(){
        setContador(contador+1);
        console.log(contador);
    }

    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={AtualizaContador}>Contador</button>
        </div>
    )
}

export default Contador;