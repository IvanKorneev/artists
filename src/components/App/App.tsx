import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Home/Home";
import "./App.sass";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;
