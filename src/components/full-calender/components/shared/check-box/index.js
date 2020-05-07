import React from 'react';

export default ({label, handleEvents, value, checkedFlg})=><div>
    <input type='checkbox'  checked={checkedFlg} value={value} 
    onChange ={(evt)=>handleEvents(evt)}/>{label}
    </div>;
    
