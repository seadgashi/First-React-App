import React, {useEffect, useState} from 'react';
import foto from '../../images/logo7.jpg';
import { Link } from 'react-router-dom';
import { data } from '../../mock/dummyData';
import { news} from '../../mock/LajmeData';

import './LajmeList.scss';

 function LajmeList() {
    const [users, setUsers] = useState(data);
    const [newses, setNews] = useState(news);

  return (
    <div className='he'>
      
    
          <div className='all-news'>
    <div>
      <h1>Lajme.</h1>
        <div className='header'>
         
           
            <Link to={'ekonomi/'}> <img src={foto} alt="Logo" /><p>Kosova dhe Unioni Arab me bashkëpunim e rekomandime për ndryshimet klimatike </p></Link>
        </div>
        <div className='container'>
        {newses.map(n =>(
     
            <Link to={'lajme/' + n.title} >
             
                  <div className='container-user'>
                  <img className='container-image' src={n.image}/>
                  <p className='container-paragraf'>{n.title}</p>        
                  <div className='br'></div>
        </div>
            </Link>
        ))}
        </div>
    </div>

    </div>
    <div>
      <h1 className='header-text'>Botë</h1>
    {users.map(user => (
            <Link to={'bote/' + user.title} >
             
                  <div className='user-container'>
                    <img className='image' src={user.image}/>
                    <p className='paragraf'>{user.title}</p>        
                    <div className='br'></div>
        </div>
            </Link>
        ))}
    </div>
    </div>
  )
}

export default LajmeList;