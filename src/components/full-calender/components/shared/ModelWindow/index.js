import './style.css';
import React, { useRef, useState } from 'react';

export default ({ newCalender, modelShow, handlerClick }) => {
    const inputEl = useRef(null);

    const [ObjId, updateObjId] = useState();

    const selectHandler = (e) => {
        console.log(e.target.value);
        updateObjId(e.target.value);

    };

    if (modelShow) {
        return <div className='model-window'>
            <div className='model-window-title'>

                <h4>ModelWindow</h4>

                <form>

                    <input type='text' ref={inputEl} />
                    <select defaultValue={newCalender[1].ObjId} onBlur={selectHandler} onChange={selectHandler}>
                        {
                            newCalender.map(item => <option value = {item.ObjId} key = {item.id}>{item.label}</option>)
                        }
                    </select>

                    <button onClick={() => {
                        const inputStr = inputEl.current.value
                        if (inputStr !== '') {
                            handlerClick(inputStr, ObjId);
                        }
                    }
                    }>SAVE</button>

                </form>
            </div>
        </div>;
    }
    return null;
};

