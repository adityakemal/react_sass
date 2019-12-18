import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>hello world im using SASS</h1> <br/>
          <button>call me</button>
        </div>
      </header>
      <section>
        <h2>we are section 1</h2>
        <p>fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        </p>
        <h2>we are section 2</h2>
        <p>fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        </p>
        <h2>we are section 3</h2>
        <p>fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        fjsldf lksjdhflksa lskdhflkas
        </p>
        <button>yes me!</button>
      </section>

      <div className='contact'>
        <div>
          <h2>email me! //ini inherit dari style di header.scss</h2> 
          <form>
            <input type='text'/>
            <button>send </button>
          </form>

        </div>
      </div>
      <footer>
        i m footer oke find
      </footer>
      
 
    </div>
  );
}

export default App;
