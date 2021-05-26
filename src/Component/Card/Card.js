import React, { useEffect, useState } from 'react';
import CardContent from '../Card_Content/CardContent';
import './Card.css'

const Club = () => {
    const [Club, setClub] = useState([]);
    useEffect(() => {
        const url ='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data =>setClub(data.teams))
    },[])
    
    return (
        <div className='container '>
            <div className="row ">

                {/* Loading spainer */}
                {
                    Club.length === 0 && <div className="spinner-border text-info spiner" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                }

                {/* API MAP */}
                {Club.map(club => <CardContent club={club} key={club.idTeam}></CardContent>)}


            </div>
        </div>
    );
};

export default Club;