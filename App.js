import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { 

  let post = '난곡 라면 맛집'; // post라는 변수를 지정(바인딩 개념)
  let [글제목 , b] = useState(['여자코트추천','남자코트추천','공용니트추천']);

    // let [a,c]= [1,2]; Destructuring 문법
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ 글제목[0] }</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
      </div>
    </div>
  );
}

export default App;
