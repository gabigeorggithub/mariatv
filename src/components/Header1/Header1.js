import React from 'react';
import './Header1.css'
import logoImage from "../../assets/logo.png"
import carrinho from "../../assets/carrinho.png"
import { useNavigate } from 'react-router-dom';



const Header1 = () => {

//   const navigate = useNavigate();

// // Função para navegar para a página 'RefSenha'
// const goToLogin = () => {
//   navigate('/login');
// };

// const goToCadastro = () => {
//   navigate('/cadastro')
// }

  return (
    <header className="header-container1">
      <div className="left-section1">
        <img src={logoImage} alt="Logo" className="logo1" />
      </div>

        <div className="user-actions1">
          <button onClick={'/'} className="login-button1">Entrar</button>

          <button onClick={'/'} className="register-button1">Cadastrar</button>

          <button onClick={'/'} className="login-button2">
            <img src={carrinho} className='carrinho'></img></button>
        </div>
      
    </header>
  );
};

export default Header1;