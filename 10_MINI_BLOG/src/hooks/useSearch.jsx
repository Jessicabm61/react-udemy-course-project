import { useLocation } from "react-router-dom"; // Importa o hook useLocation do react-router-dom para acessar a localização atual do navegador
import { useMemo } from 'react'; // Importa o hook useMemo do React para memoização de valores

export const useSearch = () => {
    // Utiliza o hook useLocation para obter a localização atual do navegador
    const { search } = useLocation();
    
    // O objeto 'search' contém os parâmetros de consulta da URL atual, por exemplo: '?id=123&category=books'
    // A partir desse objeto, podemos extrair e manipular os parâmetros de consulta, se necessário
    
    // Usa useMemo para memoizar uma nova instância de URLSearchParams com base na string de pesquisa da URL
    // Isso garante que a instância de URLSearchParams só seja recalculada quando a string de pesquisa mudar
    return useMemo(() => new URLSearchParams(search), [search]);
};
