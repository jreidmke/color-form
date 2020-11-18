const Box = ({height, width, color}) => {
    console.log(height)
    console.log(width)
    console.log(color)

	return(
        <div style={{height: height, width:width, backgroundColor:color}}/>
)}

export default Box;
