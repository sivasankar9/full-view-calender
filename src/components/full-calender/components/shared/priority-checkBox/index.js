import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';

export default ({ label, handlerPriority, value, isSelected }) => {

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isSelected}
                        onChange={(e) => handlerPriority(e)}
                        value={value}
                        color='primary'
                    />
                }
                label={label}
            />
        </FormGroup>
    );
}; 
