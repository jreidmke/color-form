import React, { useState } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

const Boxes = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (box) => {
        setBoxes([...boxes, box]);
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const makeBoxes = boxes.map(box => (
        <Box key={box.id} id={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} handleRemove={removeBox}/>
    ));

    return(
        <div>
             <BoxForm createBox={addBox} />
            {makeBoxes}
        </div>
    )
}

export default Boxes;
