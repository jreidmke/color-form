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
        <Box
        key={box.id}
        id={box.id}
        height={box.height}
        width={box.width}
        backgroundColor={box.backgroundColor}
        handleRemove={removeBox}
        />
    ));

    return(
        <div>
             <BoxForm createBox={addBox} /> {/**HERE!!! WE GIVE THE createBox PROP FROM BOXFORM A VALUE OF OUR addBox function. So remember, createBox passes in our formData state which is filled with KVP's of box properties. It adds it from that state (form state) to this state (box state). So at once you are using one state to set another. Phew */}
            {makeBoxes}
        </div>
    )
}

export default Boxes;
