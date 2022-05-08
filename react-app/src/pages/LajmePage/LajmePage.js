import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { news } from '../../mock/LajmeData';



 function LajmePage(props) {
    const [nId, setNId] = useState(null);
    const [n, setN] = useState({});

    const { title } = useParams();

    useEffect(() => {
      setNId(title);

        setN(news.find(n => n?.title == title));
    }, [n])

  return (
    <div className='another-page'>
       
        <h1 className='user-value'>{n?.title}</h1> <br />
         <div className='user-img'><img src={'http://localhost:3000/' + n?.image}/></div> 
        <div className='user-body'>{n?.body}</div> <br />   
   
        
    </div>
  )
}

export default LajmePage;