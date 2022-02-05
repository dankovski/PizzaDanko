import React from 'react';
import { getCookie } from '../ContextProvider';



const CSRFToken = () => {

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={getCookie('csrftoken')} />
    );
};
export default CSRFToken;