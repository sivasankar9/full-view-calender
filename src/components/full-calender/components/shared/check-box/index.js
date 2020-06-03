import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MaterialUiCheckbox from '@material-ui/core/Checkbox';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const CheckBox= (props) => {

    const checkBoxStyles = (color) =>()=> {
        return ({
          root: {
            '&$checked': {
              color
            }
          },
          checked: {}
         });
      };

        const CheckboxWithStyles = withStyles(checkBoxStyles(props.color))(MaterialUiCheckbox);

        return (
            <FormGroup row>
            <FormControlLabel
                control={
                <CheckboxWithStyles  
                checked={props.checkedFlg}
                onChange={(evt) => props.handleEvents(evt)} 
                value={props.value}
                />
                }
                label={props.label}
            />
        </FormGroup>
    );
}; 

export default CheckBox;
