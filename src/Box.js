import { v4 as uuidv4 } from 'uuid';

const Box = () => {
        const remove = () => handleRemove(id);

        return(
                <div style={{height:'100px', width:'100px', backgroundColor:'red'}}></div>
        )
}

export default Box;

// const Box = ({id, height, width, color, handleRemove}) => {
//         const remove = () => handleRemove(id); //handleRemove is a callback that calls remove via ID (a function in boxlist)
//         return(
//                 <div>
//                         <div style={{height: height, width:width, backgroundColor:color}}/>
//                         <button onClick={remove}>X</button> {/* a button is also passed in that allows for remove to be called. This triggers handleRemove(id) which removes the div from the DOM. */}
//                 </div>
//         )

// }

// export default Box;
