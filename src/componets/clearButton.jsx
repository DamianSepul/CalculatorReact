import '../stylesheets/clearButton.css'

export const ClearButton = (props) => {
    return(
        <div className="boton-clear" onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}