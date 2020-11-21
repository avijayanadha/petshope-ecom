import Buttons from './components/Buttons.js'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
 
  palette: {
    primary: blue,
    secondary: {
      main: '#40c4ff',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
       <div className="App">
          <header className="App-header">
            <Buttons/>
          </header>
        </div>
    </ThemeProvider>
  );
}

export default App;
