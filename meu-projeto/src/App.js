
import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/Saudacao';

import{BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
function App() {
  const [nome,setNome]=useState()
  const n ='Silva'
  const meusItens = ['React','Vue','Angular']
 return (
   <div className='App'> 

   
       
        <SayMyName nome ='Davi'/>
        <SayMyName nome ='Gledson'/>
        <SayMyName nome = {n}/>

        <Pessoa nome='Davi'
        idade ='19'
        profissao ='Programador'
        foto ='https://classic.exame.com/wp-content/uploads/2022/07/FXazmcMXkAUpBJT.jpg?quality=70&strip=info&w=985'
        
        />
        
        <h1>Testeando CSS</h1>
        <Frase/>
        <Frase/>
        
        <List/>
        
        <h1>Testeando Eventos</h1>

        <Evento />
        

        <Form/>
        
        <Evento/>


      <h1>Renderização Condicional</h1>
        <Condicional/>

      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      
      <Saudacao nome={nome}/>

      <h1>Implementando o React Router</h1>

      <Router>
        <NavBar/>

        <Routes>
          <Route exact path='/' element={<Home/>}>
          
          </Route>

          <Route path='/empresa' element={<Empresa/>}>
          
          </Route>

          <Route path='/contato' element={<Contato/>}>
          
          </Route>
        </Routes>
        <Footer/>
      </Router>

   </div>
        
              
  )
}

export default App;
