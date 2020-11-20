import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const BoxForm = ({createBox}) => {

    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    };

    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const input = (evt) => {
        evt.preventDefault();
        createBox({...formData, id: uuidv4()});
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