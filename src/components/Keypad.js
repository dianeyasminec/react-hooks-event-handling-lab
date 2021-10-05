// Code Keypad Component Here
import React from 'react';
class Keypad extends React.Component {
    render() { 
        function handleOnChangeEvent(){
            console.log('Entering password...')
                }
        return <div>
            <input onChange={handleOnChangeEvent} type="password" />
        </div>;
    }
}
 
export default Keypad;
