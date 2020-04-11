import './style.css';
import React, { useRef,useState } from 'react';

export default ({ modelShow, handlerClick }) => {
    const inputEl = useRef(null);

    const [EventType,updateState] = useState();

    const selectHandler = (e)=>{
        console.log(e.target.value);
        updateState(e.target.value);

    };

    if (modelShow) {
        return <div className='model-window'>
            <div className='model-window-title'>

                <h4>ModelWindow</h4>

                <form>

                    <input type='text' ref={inputEl} />

                    <select value = 'BILL' onBlur={selectHandler} onChange = {selectHandler}>
                        <option>EVENT</option>
                        <option>BILL</option>
                    </select>

                    <button onClick={() => {
                        if (inputEl.current.value !== '') {
                            handlerClick(inputEl.current.value,EventType);
                        }
                    }
                    }>SAVE</button>

                </form>
            </div>
        </div>;
    }
    return null;
};

