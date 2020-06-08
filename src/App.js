import React from 'react';
import './App.css';

function App() {
  
  return (
    <div className="contentHeaderAll">
      <div className="content">
        <header className="header">
          <h1 className="logoName">facebook</h1>

          <div className="inputHeader">
            <div className="input">
              <label htmlFor="">Email ou telefone</label><br/>
              <input type="text"/>
            </div>
            
            <div className="input">
              <label htmlFor="">Senha</label><br/>
              <input type="text"/><br/>
              <span>Esqueceu a conta?</span>
            </div>

            <div className="btnEntrar">
              <button>Entrar</button>
            </div>
          </div>
        </header>

        <div className="mainContent">
          <div className="info">
            O Facebook ajuda você a se conectar e<br/> compartilhar com as pessoas que fazem parte<br/> da sua vida.
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png" alt=""/>
          </div>

          <div className="formCad">
            <h1>Abra uma conta</h1>
            <p>É rápido e fácil.</p>

            <form>
              <div className="inputGroup">
                <div>
                  <input type="text" className="form-input" placeholder="Nome"/>
                </div>
                <br/><br/>
                <br/>
                <div>
                  <input type="text" className="form-input" placeholder="Sobrenome"/>
                </div>
              </div>

              <input type="text" className="form-input" placeholder="Celular ou email"/><br/><br/>
              <input type="text" className="form-input" placeholder="Nova senha"/><br/>

              <p className="textLabel">Data de nascimento</p>
              <select>
                <option value="0" disabled>Dia</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7" selected="1">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select>
                <option value="0" disabled>Mês</option>
                <option value="1">Jan</option>
                <option value="2">Fev</option>
                <option value="3">Mar</option>
                <option value="4">Abr</option>
                <option value="5">Maio</option>
                <option value="6" selected="1">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Ago</option>
                <option value="9">Set</option>
                <option value="10">Out</option>
                <option value="11">Nov</option>
                <option value="12">Dez</option>
              </select>

              <select>
                <option value="0" disabled>Ano</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
              </select>

              <br/>

              <p className="textLabel">Gênero</p>
              <input type="radio" name="genero"/>Feminino
              <input type="radio" name="genero"/>Masculino

              <p className="termos">Ao clicar em Cadastre-se, você concorda com nossos <a href="#">Termos, Política de Dados e Política de Cookies.</a> Você pode receber notificações por SMS e pode cancelar isso quando quiser.</p>
            
              <button type="button" className="btnCad">Cadastrar-se</button>

              <p className="criarPage"><a href="#">Criar uma Página</a> para uma celebridade, banda ou empresa.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
