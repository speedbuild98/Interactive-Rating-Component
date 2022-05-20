import './App.css';
import Estrella from "./assets/images/icon-star.svg";
import Gracias from "./assets/images/illustration-thank-you.svg";

function App() {
  return (
    <div className="App">
      <main>
        <div id='cajita1' className='Caja1'>
          <div className='BotonEstrella'><img alt="Estrellita" src={Estrella}/></div>
          <div className='ContainerTexto'>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
          </div> 
          <div className="ContainerBotones ratings">
          <label for="1">
            <input className='Botones' type="radio" name="rating" value="1" id="1" />
            <p>1</p>
          </label>
          <label for="2">
            <input className='Botones' type="radio" name="rating" value="2" id="2" />
            <p>2</p>
          </label>
          <label for="3">
            <input className='Botones' type="radio" name="rating" value="3" id="3" />
            <p>3</p>
          </label>
          <label for="4">
            <input className='Botones' type="radio" name="rating" value="4" id="4" />
            <p>4</p>
          </label>
          <label for="5">
            <input className='Botones' type="radio" name="rating" value="5" id="5" />
            <p>5</p>
          </label>
          </div>
           <button className='Boton' onClick={function() {
        const value = document.querySelector(
          'input[name="rating"]:checked'
        ).value;

        let cajita1 = document.getElementById("cajita1");
        cajita1.classList.add("hidden");

        let thanks = document.getElementById("thanks");
        thanks.classList.toggle("hidden");

        document.getElementById(
          "selection"
        ).innerHTML = `You selected ${value} out of 5`;
      }}>SUBMIT</button>
        </div>
        <div className="Caja2 card__thank-you hidden" id="thanks">
          <img src={Gracias} alt="thank-you" />
          <p id="selection"></p>
          <h1>Thank You!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, dont't hesitate to get in touch!
          </p>
      </div>
        <div className="attribution">
      Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io/profile/speedbuild98" target="_blank">Frontend Mentor</a>. 
      Coded by <a rel="noreferrer" href="https://devgallardo.netlify.app/">GALLARDO</a>.
      </div>
      </main>
    </div>
  );
}

export default App;



