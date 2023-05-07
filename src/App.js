import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/sb-admin-2.css'
import Login from './Login';
import Portal from './Portal'
import Dashboard from './Dashboard'
import Students from './Students';
import Createstudent from './Createstudent';
import Studentview from './Studentview';
import Editstudent from './Editstudent';
import Teachers from './Teachers';
import Createteacher from './Createteacher';
import Teacherview from './Teacherview';
import Editteacher from './Editteacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} ></Route>
          <Route path='/Portal' element={<Portal></Portal>} >
          <Route path='Dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='Students' element={<Students></Students>}></Route>
          <Route path='Students/:id' element={<Studentview></Studentview>}></Route>
          <Route path='Students/Edit/:id' element={<Editstudent></Editstudent>}></Route>
          <Route path='Create-Student' element={<Createstudent></Createstudent>}></Route>
          <Route path='Teachers' element={<Teachers></Teachers>}></Route>
          <Route path='Teachers/:id' element={<Teacherview></Teacherview>}></Route>
          <Route path='Teachers/Edit/:id' element={<Editteacher></Editteacher>}></Route>
          <Route path='Create-Teacher' element={<Createteacher></Createteacher>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
