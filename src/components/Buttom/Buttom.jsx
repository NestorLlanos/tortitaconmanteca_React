const Buttom = (props) =>{
    console.log(props);
    return (
        <button onClick={props.callBack} className = {props.className}> {props.label} </button>

    )
}

export default Buttom