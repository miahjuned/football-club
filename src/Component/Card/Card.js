import React, { useEffect, useState } from 'react';
import CardContent from '../Card_Content/CardContent'

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
                {Club.map(club => <CardContent club={club}></CardContent>)}
            </div>
        </div>
    );
};

export default Club;