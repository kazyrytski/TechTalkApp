import { FC } from "react";
import { Button as MuiButton } from "@material-ui/core";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

interface ButtonProps extends MuiButtonProps {}

const Button: FC<ButtonProps> = ({
  id,
  onClick,
  classes,
  children,
  ...props
}) => {
  return (
    <MuiButton
      id={id}
      onClick={onClick}
      classes={classes}
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
