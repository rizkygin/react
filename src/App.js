import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //default
    this.state = {
      // active : "Merah",
      member : "Lisa",
      color : "merah",
      img : "lisa.jpg",
      //date state
      date: new Date(),
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      // active: menu,
      member : menu.member,
      color : menu.color,
      img : menu.img,   
    });
  }
  // cara 1 nampilin gambar
  // menusaya(){
  //   //gambar harus sesuai dengan nama statenya
  //   return <img src={"img/"+this.state.active+".jpg"} width="300"></img>
  // }
  // // cara 2 nampilin gambar
  // menusaya2(){
  //   //menyimpan var gambar dan mengubah nama gambar sesuai statenya
  //   var gambar;
  //   if(this.state.active.toLocaleLowerCase() === 'merah'){
  //     gambar = "gege";
  //   } else if(this.state.active.toLocaleLowerCase() === 'kuning'){
  //     gambar = "isyana";
  //   } else if(this.state.active.toLocaleLowerCase() === 'hijau'){
  //     gambar = "chelsea";
  //   } else if(this.state.active.toLocaleLowerCase() === 'biru'){
  //     gambar = "velove";
  //   }
  //   return <img src={"img/"+gambar+".jpg"} width="300"></img>
  // }

  //cara 3 passing data langsung ke state
  galery(){
    return <img src={"img/"+this.state.img} width="300"></img>
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000,
    );
  }

  componentWillMount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date : new Date(),
    });
  }

  render() {
    return (
      <div id="app"> 
        { /* map akan loop sebanyak menu yang didefinisikan*/ }
        {/* kemudian mengembalikan elemen <a/> */}
        <h2 className="info">BlackPink</h2>
        <nav className="nav">{this.props.items.map((menu,index) => {
            var style = 'menu';

            //penamaan state color tidak harus sesuai pada menu.
            if(this.state.color === menu.color){
              style = `${style} is-active`;
            }

            return <a
              className = {style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,menu)} // guanakan this karena clicked merupakan fungsi yang dibuat sendiri dan global
              key = {index}
            >
              {menu.member}
            </a>;
          }
        )}
        </nav>

        {/* gambar dan menu cara 1 dan 2 dengan menu dan active*/}
        {/* <div className =  "info">
          ini adalah <span className = {"selected "+this.state.active}>{this.state.active}</span><br/><br/>
          {this.menusaya2()}
        </div> */}
        
        {/* cara memanggil gambar sebagai background dengan css  */}
        {/* <div className = {"gambar "+this.state.active}>
        </div> */}

        {/* gambar dan menu cara 3 dengan menu.member */}
        <div className =  "info">
          ini adalah <span className = {"selected "+this.state.color}>{this.state.member}</span><br/><br/>
          {this.galery()}
          {/* <img src={"img/"+this.state.img} width="300"></img> */}
        </div>

        <div className="info">
          <h2>Sekarang jam {this.state.date.toLocaleTimeString()}.</h2>
        </div>

      </div>
    );
  }
}

export default App;