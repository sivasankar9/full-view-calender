import './style.css';
import React, { useRef, useState } from 'react';

export default ({ hasEvents, ...props }) => {

    return props.modelShow ?
        <div className='model-window'>

            <div className="model-window-title">
                <h4>title</h4>
            </div>
            <div className="body">
                {
                    hasEvents ? <ModalForm {...props} /> : <ModalMessage {...props}/>
                }
            </div>
            <div className="footer"></div>

        </div> : null;
};

const ModalMessage = (props) => {
    
    return <div className='model-window'>
        <div className='model-window-title'>

            <h4>OOOOOPPPPSSSSSSSSSS NO EVENTS CREATE</h4>
            <button onClick = {()=>props.handleCloseButton()}>CLOSE</button>
        </div>
    </div>;
};

const ModalForm = (props) => {

    const inputEl = useRef(null);

    const [ObjId, updateObjId] = useState();

    const selectHandler = (e) => {
        console.log(e.target.value);
        updateObjId(e.target.value);

    };

    return <div>
        <form>
            <input type='text' ref={inputEl} />
            <select onBlur={selectHandler} onChange={selectHandler}>
                {
                    props.newCalender.map(item => <option value={item.ObjId} key={item.id}>{item.label}</option>)
                }
            </select>

            <button onClick={() => {
                const inputStr = inputEl.current.value;
                if (inputStr !== '') {
                    props.handlerClick(inputStr, ObjId);
                }
            }
            }>SAVE</button>
            <button>CLOSE</button>


        </form>
    </div>;
};
