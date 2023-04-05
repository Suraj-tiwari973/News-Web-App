import {useEffect,useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"


export default function FetchData({cat}) {

    const [data, setdata] = useState("");

    const fetchData = async() =>{

        await axios                            // here we are fetching the data from api...
        .get(
            cat 
            ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=d11cf7e2c71d42178caa38289713b11b`
            : `https://newsapi.org/v2/top-headlines?country=in&apiKey=d11cf7e2c71d42178caa38289713b11b`

        )

        .then((res)=> setdata(res.data.articles));

    };

    
    useEffect(() => {

        fetchData();        // it will change the effects in fuction if there is anu change at external side...
    });


  return (
    <div className='container-fluid' style={{backgroundColor:"black",color:"white"}}>
        <h3 className='py-4 d-flex justify-content-center align-items-center'><u>TOP HEADLINES</u></h3>
        <div className='container d-flex justify-content-center align-items-center flex-column' style={{minHeight:"100vh"}}>
            {
                data ? data.map((items,index) =>(

                    <>                  
                    <div className='container m-2' style={{maxWidth:"800px",boxShadow:"2px 0px 10px blue",borderRadius:"10px"}}>

                        <h5 className='my-3'>{items.title}</h5>

                        <div className='d-flex justify-content-center align-items-center'>

                            <img src={items.urlToImage} className='img-fluid d-flex justify-content-center align-items-center' alt="Not found" style={{width:"100%",height:"400px",objectfit:"cover",borderRadius:"10px"}}/>
                        
                        </div>
                        
                        <p className='py-2'>{items.content}</p>

                        <button style={{borderRadius:"5px",marginBottom:"10px",backgroundColor:"white"}}><Link to={items.url} target="_blank" style={{textDecoration:"none"}}>View More</Link></button>
                    </div> 
                    
                    </>
                )) 
                : <h5>Loading....</h5>    // here it is iterating each data items and different indexes and we are getting different data again and again...
            }
        </div>
    </div>
  )
}
