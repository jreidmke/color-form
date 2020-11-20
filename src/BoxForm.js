import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const BoxForm = ({createBox}) => {

    const INITIAL_STATE = { //put this here to make it easier to revert back to empty form
        height: "",
        width: "",
        backgroundColor: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE); //set formData as blank form

    const handleChange = (evt) => {//generic handle function that sets the formData property to the value noticed in the change (as the user typed it in)
        const { name, value } = evt.target;//destructure name and value from evt.target object
        setFormData(formData => ({//place formData in a callback to prevent it from updating immeaditley
            ...formData,//spread formData
            [name]: value//assign prop (name got out of input attribute) value.
        }));
    };

    const input = (evt) => {//what happens on submit
        evt.preventDefault();//first, prevent page from refreshing
        createBox({...formData, id: uuidv4()});//OK, this is the crazy part. So right now, createBox is just a prop. See, it's destructured up top. So what we do is take formData from state, and pass it in with the id set to a uuid ID. 
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
          <form onSubmit={input}>
            <div>
              <label htmlFor="height">Height</label>
              <input
                onChange={handleChange}
                type="text"
                name="height"
                value={formData.height}
                id="height"
              />
            </div>
            <div>
              <label htmlFor="width">Width</label>
              <input
                onChange={handleChange}
                type="text"
                name="width"
                id="width"
                value={formData.width}
              />
            </div>
            <div>
              <label htmlFor="backgroundColor">Background Color</label>
              <input
                onChange={handleChange}
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                id="backgroundColor"
              />
            </div>
            <button id="newBoxButton">Add a new box!</button>
          </form>
        </div>
      );
}

export default BoxForm;