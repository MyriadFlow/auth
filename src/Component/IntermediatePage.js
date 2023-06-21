import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function IntermediatePage(paseto) {
    const navigate = useNavigate()
    const navigateTo=(appBaseUrl, appName)=>{
        window.open(`http://localhost:3001/#/redirect?appBaseUrl=${appBaseUrl}&appName=${appName}`, '_blank');
    } 

    useEffect(() => {
      if(!localStorage.getItem('PLATFORM_PASETO')){
        navigate('/')
      }
    }, [])
    

  return (
    <div>
      <ul>
        <li>
          <button onClick={()=>navigateTo('http://localhost:3000','Lauchpad')}>Launchpad</button>
        </li>
        <li>
        <button onClick={()=>navigateTo('http://localhost:3004','Marketplace')}>Marketplace</button>
        </li>
      </ul>
    </div>
  );
}
