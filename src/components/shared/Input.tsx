import { FC } from "react";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import MuiInput from "@material-ui/core/Input";
import { InputProps as MuiInputProps } from "@material-ui/core";

interface InputProps extends MuiInputProps {
  htmlFor?: string;
  label?: string;
  containerClasses?: string;
}

const Input: FC<InputProps> = ({
  id,
  value,
  onChange,
  htmlFor,
  label,
  classes,
  containerClasses,
  name,
  ...props
}) => {
  return (
    <div className={containerClasses}>
      <FormControl fullWidth>
        <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
        <MuiInput
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          {...props}
        />
      </FormControl>
    </div>
  );
};

export default Input;
