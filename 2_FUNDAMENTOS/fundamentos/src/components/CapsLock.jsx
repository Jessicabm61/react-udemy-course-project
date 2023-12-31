function CapsLock (props) {
    const textoOriginal = props.texto;
    const textoCapsLock = textoOriginal.toUpperCase();
    return (
        <div>
            {textoCapsLock}
        </div>
    )
}
export default CapsLock;