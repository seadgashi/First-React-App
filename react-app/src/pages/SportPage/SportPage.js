import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { sportnews } from '../../mock/sportData';


 function SportPage(props) {
    const [sId, setSId] = useState(null);
    const [s, setS] = useState({});

    const { title } = useParams();

    useEffect(() => {
      setSId(title);

      setS(sportnews.find(s => s?.title == title));
    }, [s])


  return (
    <div className='another-page'>
       
        <h1 className='user-value'>{s?.title}</h1> <br />
         <div className='user-img'><img src={'http://localhost:3000/' + s?.image}/></div> 
        <div className='user-body'>{s?.body}</div> <br />   
   
        
    </div>
  )
}

export default SportPage;