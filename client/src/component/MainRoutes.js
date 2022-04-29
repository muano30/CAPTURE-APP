import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Form from './Form'
import Display from './Display'


const Main = () => {

    return(
        <div>        
            <Router>
            <Routes>
                <Route exact path="/" element={<Form/>}></Route>
                {/* <Route path="/display" element={<Display/>}></Route> */}
             
            </Routes>
        </Router>
        </div>

    )

}

export default Main;