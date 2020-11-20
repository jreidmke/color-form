import React, { useState } from "react";
import uuid from "uuid/v4";

const NewBoxForm = ({createBox}) => {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });
}