import { useState } from 'react';

// Componente funcional Challange
const Challange = () => {
    // Declaração de variáveis para os valores
    const value1 = 8;
    const value2 = 9;

    // Estado para armazenar a soma
    const [soma, setSoma] = useState(0);

    // Função para calcular a soma e atualizar o estado
    function somaValores() {
        setSoma(value1 + value2);
    }

    // Renderização do componente
    return (
        <div>
            <h1>{value1} + {value2}</h1> {/* Exibição dos valores */}
            <button onClick={somaValores}>clique aqui pra somar</button> {/* Botão para acionar a soma */}
            <h1>A soma é {soma}</h1> {/* Exibição do resultado da soma */}
        </div>
    );
}

export default Challange;
