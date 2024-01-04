//Aula sobre eventos no react

function renderSomenthing(x){
    if (x) {
       return <h1>Renderizar isso</h1> ;
    } else {
        return <h1>também Renderizar isso</h1>
    }
};

const Events = () => {

    const handleMyEvent = (e) => {
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <button onClick={() => console.log("clicou")}>Clique aqui também!</button>
            </div>
            <div>{renderSomenthing(true)}
                 {renderSomenthing(false)}
            </div>
        </div>
    )
}
export default Events;