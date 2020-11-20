import React, { useState } from 'react';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

const Boxes = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (box) => {
        setBoxes([...boxes, box]);
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const makeBoxes = boxes.map(box => (
        <Box key={uuidv4()} id={uuidv4()} height='100px' width='100px' backgroundColor='red' handleRemove={removeBox}/>
    ));

    return(
        <div>
            <button onClick={addBox}>Add Box</button>
            {makeBoxes}
        </div>
    )
}

export default Boxes;
