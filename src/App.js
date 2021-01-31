import React, { useEffect, useState } from 'react';
import "./App.css";
import Card from './component/Card';
import Navbar from "./component/Navbar";
import Pagination from './component/Pagination';

const API_KEY = "00ad7cf7-79de-494d-817a-9b425a0c5582";

function App() {
  const [articles, setArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&show-fields=thumbnail,headline,trailText&api-key=${API_KEY}`)
      .then((x) => x.json())
      .then((x) => x.response)
      .then( x =>{
        setArticles(x.results)
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
  },[]);


  return (
    <React.Fragment>
    <Navbar />
    <div className="container-fluid content__section">
      <div className="row">
        <div className="col-md-8">
          {console.log(articles)}
            {isLoading ? <h1>loading...</h1> : <div className="row">
              {articles.map(article=>(
                <div className="col-md-4">
                    <Card headline={article.fields.headline} thumbnail={article.fields.thumbnail}></Card>                  
                </div>
              ))}
              </div>}
          {/* </div> */}
        </div>
        <div className="col-md-4">
          <h1>this is the sidebar section</h1>
        </div>
      </div>
    </div>

    {/* pagiantion */}
    <Pagination></Pagination>
    </React.Fragment>
  );
}

export default App;