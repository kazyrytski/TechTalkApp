import { FC } from "react";
import MuiDialog from "@material-ui/core/Dialog";
import { DialogProps as MuiDialogProps } from "@material-ui/core";

interface DialogProps extends MuiDialogProps {}

const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  classes,
  children,
  ...props
}) => {
  return (
    <MuiDialog open={open} onClose={onClose} classes={classes} {...props}>
      {children}
    </MuiDialog>
  );
};

export default Dialog;
