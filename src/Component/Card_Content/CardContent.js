import React from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

const CardContent = (props) => {

    const {strLeague, strTeamFanart4, strTeam, idTeam,strTeamBanner,strAlternate,intFormedYear} = props.club;

    return (
        <div className="col-md-6 col-sm-12 col-lg-4 col">
            <div className="card text-center mb-4 "> 
                <img src={strTeamFanart4} alt=""/>
                <img src={strTeamBanner} alt=""/>
                <div className="card-body">

                    <h5 className="card-title">
                        <span className='text-success'> Team Name: {strTeam}</span>
                    </h5>

                    <p className="card-text">
                        <small>League 1: </small>{strLeague} <br/>
                        <small>League 2: </small>{strAlternate} <br/>
                        <small>Established : </small>{intFormedYear} 
                    </p>


                    <Link className='btn btn-primary' to={`/club/${idTeam}`}>Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default CardContent;