import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css'; //import cssnya
import App from './App'; 
import * as serviceWorker from './serviceWorker'; // agar dapat di akses ofline

// const items = ['Merah','Kuning','Hijau','Biru'];  
const items = [
  {
    member : 'Lisa',
    color : 'merah',
    img : 'lisa.jpg',
  },
  {
    member : 'Jeni',
    color : 'pink',
    img : 'jeni.jpg',
  }
  ,{
    member : 'Rose',
    color : 'kuning',
    img : 'rose.jpg',
  }
  ,{
    member : 'Jiso',
    color : 'biru',
    img : 'jiso.jpg',
  },
];

ReactDOM.render(<App items={items}/>,
  document.getElementById('root')  
);

serviceWorker.register(); // service worker agar dapat di akses ofline.. ganti unregister agar hanya dapat di akses online
