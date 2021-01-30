import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';


function App() {

  const [author, setAuthor] = useState({});
  
  // useEffect? 
  useEffect(() => {
    fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5c94f9ba3c2445d4b181e5776a3c7df6")
    .then(res=> res.json())
    .then((news)=>{
      // console.log(news.articles, news);
      setAuthor(news.articles.map((x)=> setAuthor(x.author)));
      // console.log(author);
    })
  })
  
  return (
    <div className="container-fluid">
        <Navbar></Navbar>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
                <Card title={author}></Card>
                {/* <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
    </div>
  );
}

export default App;
