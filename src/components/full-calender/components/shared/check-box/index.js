import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const MyCheckBox= (props) => {

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

        const CustomCheckbox = withStyles(checkBoxStyles(props.color))(Checkbox);

        return (
            <FormGroup row>
            <FormControlLabel
                control={
                <CustomCheckbox  
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

export default MyCheckBox;
