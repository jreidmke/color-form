const Box = ({height, width, color}) => {
    console.log(height)
    console.log(width)
    console.log(color)

	return(
		<span style={{height: height}, {width:width}, {backgroundColor:color}}></span>
)}

export default Box;
