import { makeStyles } from "@material-ui/core";
import { createContext, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./components/en/Home";
import Main from "./components/en/Main";
import Home_FR from "./components/fr/Home_FR";
import Main_FR from "./components/fr/Main_FR.js";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export const AppContext = createContext(null);

function App() {
  const classes = useStyles();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const whichHome = () => {
    if (selectedLanguage === "en") {
      return <Home />;
    }

    // eslint-disable-next-line react/jsx-pascal-case
    return <Home_FR />;
  };

  const whichMain = () => {
    if (selectedLanguage === "en") {
      return <Main />;
    } else {
      // eslint-disable-next-line react/jsx-pascal-case
      return <Main_FR />;
    }
  };

  return (
    <Router>
      <AppContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
        <div className={classes.root}>
          <Switch>
            <Route exact path="/main">
              {whichMain}
            </Route>
            <Route exact path="/requests">
              {whichHome}
            </Route>
            <Route exact path="/">
              {whichHome}
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;

// import {makeStyles} from "@material-ui/core"

// const useStyles = makeStyles(theme => ({
//   root: {
//     height: "100vh",
//   },

// }))
// function App() {
//   const classes = useStyles()
//   return (
//     <div className={classes.root}>

//     </div>
//   );
// }

// export default App;
