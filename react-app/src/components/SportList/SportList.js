import React, {useEffect, useState} from 'react';
import foto from '../../images/logo15.jpg';
import { Link } from 'react-router-dom';
import { data } from '../../mock/dummyData';
import { sportnews} from '../../mock/sportData';


 function SportList() {
    const [users, setUsers] = useState(data);
    const [sportnewses, setNews] = useState(sportnews);

  return (
    <div className='he'>
      
    
          <div className='all-news'>
    <div>
       <h1>Sport.</h1>
        <div className='header'>
         
           
            <Link to={'basketboll/'}> <img src={foto} alt="Logo" /><p>Kosova dhe Unioni Arab me bashkëpunim e rekomandime për ndryshimet klimatike </p></Link>
        </div>
        <div className='container'>
        {sportnewses.map(s =>(
     
            <Link to={'futboll/' + s.title} >
             
                  <div className='container-user'>
                  <img className='container-image' src={s.image}/>
                  <p className='container-paragraf'>{s.title}</p>        
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

export default SportList;