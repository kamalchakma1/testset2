import Home from "./Components/Home"
import Grid from "./Components/Grid"
import Form from "./Components/Form"
import { BrowserRouter,Routes, Route } from "react-router-dom"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
             <Home/>
             {/* <Form/> */}
             <Routes>
                <Route element={<Form/>} path="/"/>
                <Route element={<Grid/>} path="/grid"/>
             </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App