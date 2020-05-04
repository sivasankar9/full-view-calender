import React from 'react';

export default ({label,handlerPriority,isSelected,value})=>{

    return (<div>
        <input type = "checkbox"
         onChange = {(e)=>handlerPriority(e)}
         checked = {isSelected}
         value = {value}/>{label}
         
        </div>);
};