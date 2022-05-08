import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { data } from '../../mock/dummyData';
import './LajmeListPage.scss';

 function SingleUserPage(props) {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState({});

    const { title } = useParams();

    useEffect(() => {
        setUserId(title);

        setUser(data.find(user => user?.title == title));
    }, [user])

    console.log(user.image);

  return (
    <div className='another-page'>
       
        <h1 className='user-value'>{user?.title}</h1> <br />
         <div className='user-img'><img src={'http://localhost:3000/' + user?.image}/></div> 
        <div className='user-body'>{user?.body}</div> <br />   
   
        
    </div>
  )
}

export default SingleUserPage;