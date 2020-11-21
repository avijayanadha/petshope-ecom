import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
}));


function Buttons() {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.root}>
        Hello World Button
    </Button>
  );
}

export default Buttons;
