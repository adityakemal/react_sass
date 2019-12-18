import React, {Component} from 'react';
import './App.scss';



class App extends Component {
  state = {
    dark : false
  }
  darkmode = () =>{
    if (!this.state.dark) {
      this.setState({dark : true})
    }else{
      this.setState({dark : false})
    }
  }
  
  render(){
    console.log('before', this.state);
    return (
      <div className={this.state.dark?"App dark-theme":"App"}>
        <header id='home'>
          <nav>
            <a href='#home'>home</a>
            <a href='#contact'>contact</a>
            <button onClick={this.darkmode}>dark mode</button>
          </nav>
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
  
        <div className='contact' id='contact'>
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
}

export default App;
