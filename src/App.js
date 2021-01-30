import { useEffect } from 'react';
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';


function App() {

  // const [author, setAuthor] = useState({});
  
  // useEffect? 
  useEffect(() => {
    // fetch("https://guardianmikilior1v1.p.rapidapi.com/getEditions", {
    //   "method": "GET",
    //   "headers": {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "x-rapidapi-key": "d9e0e0c313mshd686b74b370640fp14ef0fjsna89bfd2fa447",
    //     "x-rapidapi-host": "Guardianmikilior1V1.p.rapidapi.com"
    //   }
    // })
    fetch("https://content.guardianapis.com/search?api-key=31e134fa-0070-4153-9494-59b5f83cc494")
    .then(res=> res.json())
    .then((news)=>{
      // console.log(news.articles, news);
      console.log(news);
      // setAuthor(news.articles.map((x)=> setAuthor(x.author)));
      // console.log(author);
    })
    .catch(err => console.log(err))
  })
  
  return (
    <div className="container-fluid">
        <Navbar></Navbar>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
                <Card></Card>
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
