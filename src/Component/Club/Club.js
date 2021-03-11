import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Club.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin,faFlag,faFutbol,faMarsStroke, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';




const Club = () => {
    const {clubID} = useParams();
    const [clubDetails, setClubDetails] = useState([]);
    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setClubDetails(data.teams[0]))
    }, [])

    const {strWebsite,strFacebook,strTwitter,strYoutube, strTeam,intFormedYear, strStadiumDescription,strCountry,strDescriptionEN ,strGender,strLeague, idTeam, strStadiumThumb,strTeamFanart4, strTeamBanner,strTeamBadge} =clubDetails;
   
   
    return (
        <div className=''>

            <header>
                <img className='banner' src={strStadiumThumb} alt=""/>
                <img className="logo" src={strTeamBadge} alt=""/>
            </header>
            
            <div className="row clubContent">

                    <div className="col-md-6 col-sm-12 col-lg-6 col">
                        <h1 className="text-light ml-5">{strTeam}</h1>
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
                    <Link className='btn facebook' to={`/club/${strFacebook}`}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </Link>
                    <Link className='btn twitter' to={`/club/${strTwitter}`}>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </Link>
                    <Link className='btn youtube' to={`/club/${strYoutube}`}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                    <Link className='btn website' to={`${strWebsite}`}>
                        <FontAwesomeIcon icon={faGlobe} /> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Club;