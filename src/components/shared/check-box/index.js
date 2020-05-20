import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';

export default ({ label, handleEvents, value, checkedFlg }) => {

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedFlg}
                        onChange={(evt) => handleEvents(evt)}
                        value={value}
                        color='primary'
                    />
                }
                label={label}
            />
        </FormGroup>
    );
}; 
