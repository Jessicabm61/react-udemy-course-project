//Aula sobre eventos no react

const Events = () => {

    const handleMyEvent = (e) => { //Utilizar o parâmetro para a função permite imprimir no console informações sobre o evento
        console.log(e)
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    )
}
export default Events;