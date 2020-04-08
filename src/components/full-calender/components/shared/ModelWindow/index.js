import React, { useRef,useState } from 'react';
import './style.css'

export default ({ modelShow, handlerClick }) => {
    const inputEl = useRef(null);

    const [EventType,updateState] = useState('BILL')

    const selectHandler = (e)=>{

        updateState(e.target.value)

    }

    if (modelShow) {
        return <div className='model-window'>
            <div className='model-window-title'>

                <h4>ModelWindow</h4>

                <form>

                    <input type='text' ref={inputEl} />

                    <select onChange = {selectHandler}>
                        <option>EVENT</option>
                        <option selected >BILL</option>
                    </select>

                    <button onClick={() => {
                        if (inputEl.current.value !== '') {
                            handlerClick(inputEl.current.value,EventType)
                        }
                    }
                    }>SAVE</button>

                </form>
            </div>
        </div>
    }
    return null;
}

