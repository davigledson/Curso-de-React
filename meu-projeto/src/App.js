
import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const n ='Silva'
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

   </div>
        
              
  )
}

export default App;
