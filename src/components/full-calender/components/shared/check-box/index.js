import React from 'react';

export default ({label,handleEvents,value,checkedFlg})=><div>
    <input type="checkbox"  checked={checkedFlg} value={value} 
    onChange ={handleEvents}/>{label}
    </div>
    