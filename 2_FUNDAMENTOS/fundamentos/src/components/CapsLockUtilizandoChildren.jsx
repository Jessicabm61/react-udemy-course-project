function CapsLockUtilizandoChildren (props) {
    const textoOriginal = props.children; //Utilizando componentes como se fosse uma tag html
    const textoCapsLock = textoOriginal.toUpperCase();
    return (
        <div>
            {textoCapsLock}
        </div>
    )
}
export default CapsLockUtilizandoChildren ;