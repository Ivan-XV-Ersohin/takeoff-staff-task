import React from 'react';
import LogInPage from "./componetns/LogInPage";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";


const theme = createMuiTheme({palette: {type: "light"}})

function App() {
    return (

        <div className="App">
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <LogInPage/>
                </header>

            </ThemeProvider>
        </div>
    );
}

export default App;
