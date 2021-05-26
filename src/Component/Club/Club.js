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
    }, [clubID])

    const {strWebsite,strFacebook,strTwitter,strYoutube, strTeam,intFormedYear, strStadiumDescription,strCountry,strDescriptionEN ,strGender,strLeague,  strStadiumThumb,strTeamFanart4, strTeamBadge} =clubDetails;
   
   
    return (
        <div>


            {/* Club banner */}
            <header>
                <img className='banner' src={strStadiumThumb} alt=""/>
                <img className="logo" src={strTeamBadge} alt=""/>
            </header>


            

            
            {/* clubContent */}
            <div className="row clubContent">
                    <div className="col-md-6 col-sm-12 col-lg-6 col ml-2">
                        <h2 className="text-light">{strTeam}</h2>
                        <p><FontAwesomeIcon icon={faMapPin} /> Founded : {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry} </p>
                        <p><FontAwesomeIcon icon={faFutbol} /> League : {strLeague}</p>
                        <p><FontAwesomeIcon icon={faMarsStroke} /> Gender : {strGender}</p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col">
                        <img className="teamImg" src={strTeamFanart4} alt=""/>
                    </div>
            </div>




            {
                // Loading spainer
                clubDetails.length === 0 && <div className="spinner-border text-info spiner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            }




            {/* Club description */}
            <div className="description mt-5">

                <article>
                    <p>{strDescriptionEN}</p>
                    <p className="mt-5">{strStadiumDescription}</p>
                </article>



                {/* Club social media */}
                <div className="socialIcon mb-5">
                    <a className='btn facebook' target ="_blank" rel="noopener noreferrer" href={'https://'+strFacebook}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a className='btn twitter' target ="_blank" rel="noopener noreferrer" href={'https://'+strTwitter}>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                    <a className='btn youtube' target ="_blank" rel="noopener noreferrer" href={'https://'+strYoutube}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a className='btn website' target ="_blank" rel="noopener noreferrer" href={'https://'+strWebsite}>
                        <FontAwesomeIcon icon={faGlobe} /> 
                    </a>
                </div>


                
            </div>
        </div>
    );
};

export default Club;