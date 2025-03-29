import Count from './components/Count';
import Message from './components/Message';
import Button from './components/Button';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import ToggleText from './components/ToggleText';
import SimpleForm from './components/SimpleForm';
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
// const test = 0;

import { Route, Routes } from 'react-router-dom';
function App(){
  
  return (
  // <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

  //    <h2>Meu primeiro codigo React</h2>;
  //     <Message text="React" text2="TEXTÃO"/>;
  //     <Count/>
  //     <Button label="Clique Aqui" />
  //     <UserCard name="João Silva" age={25} />
  //     <Counter />
  //     <ToggleText />
  //     <SimpleForm />
  // </div>
  <>
    
    <Routes >
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/prodocts" element = {<Products/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "*" element = {<NotFound/>}/>

    </Routes>
  </>
  )
}

export default App;