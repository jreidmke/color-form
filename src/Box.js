const Box = ({id, handleRemove, height, width, backgroundColor}) => {
        const remove = () => handleRemove(id);

        return(
                <div key={id} style={{height:height, width:width, backgroundColor:backgroundColor}}>
                        <button onClick={remove}>X</button>
                </div>
        )
}

export default Box;