


// import { useState } from 'react';
// import Box from './Box';
// import NewBoxForm from './NewBoxForm';

// const Boxes = () => {
//     const [boxes, setBoxes] = useState([]);

//     const addBox = (box) => {
//         setBoxes(boxes => [...boxes, box]);
//     }
//     const removeBox = (id) => {
//         setBoxes(boxes => boxes.filter(box => box.id !== id));
//     }

//     const newBox = boxes.map(box => (
//         <Box
//         id={box.id}
//         width={box.width}
//         height={box.height}
//         handleRemove={removeBox}
//         backgroundColor={box.color}
//       />
//     ));
//     return (
//         <div>
//             <NewBoxForm createBox={addBox} /> {/* Here we have a form that allows us to add a new box */}
//             {newBox}
//         </div>
//     );
// }

// export default Boxes;