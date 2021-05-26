import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Club.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin,faFlag,faFutbol,faMarsStroke, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare,faYoutube } from '@fortawesome/free-brands-svg-icons'





const Club = () => {
    const {clubID} = useParams();
    const [clubDetails, setClubDetails] = useState([]);
    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setClubDetails(data.teams[0]))
    }, [])

    const {strWebsite,strFacebook,strTwitter,strYoutube, strTeam,intFormedYear, strStadiumDescription,strCountry,strDescriptionEN ,strGender,strLeague,  strStadiumThumb,strTeamFanart4, strTeamBadge} =clubDetails;
   
   
    return (
        <div className=''>

            <header>
                <img className='banner' src={strStadiumThumb} alt=""/>
                <img className="logo" src={strTeamBadge} alt=""/>
            </header>
            
            <div className="row clubContent">

                    <div className="col-md-6 col-sm-12 col-lg-6 col ml-2">
                        <h1 className="text-light">{strTeam}</h1>
                        <p><FontAwesomeIcon icon={faMapPin} /> Founded : {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry} </p>
                        <p><FontAwesomeIcon icon={faFutbol} /> League : {strLeague}</p>
                        <p><FontAwesomeIcon icon={faMarsStroke} /> Gender : {strGender}</p>
                    </div>


                    <div className="col-md-6 col-sm-12 col-lg-6 col">
                        <img className="teamImg" src={strTeamFanart4} alt=""/>
                    </div>
            </div>

            <div className="description mt-5">
                <article>
                    <p>{strDescriptionEN}</p>
                    <p className="mt-5">{strStadiumDescription}</p>
                </article>


                <div className="socialIcon mb-5">
                    <a className='btn facebook' target ="_blank" href={'https://'+strFacebook}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a className='btn twitter' target ="_blank" href={'https://'+strTwitter}>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                    <a className='btn youtube' target ="_blank" href={'https://'+strYoutube}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a className='btn website' target ="_blank" href={'https://'+strWebsite}>
                        <FontAwesomeIcon icon={faGlobe} /> 
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Club;