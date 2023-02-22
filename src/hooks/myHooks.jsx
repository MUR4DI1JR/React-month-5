import React, {useState} from 'react';

const useText = (text) => {
    const [value, setValue] = useState(text);

    const onChange = (event) =>{
        setValue(event.target.value)
    }

    return {
        value, onChange
    };
};

export default useText;