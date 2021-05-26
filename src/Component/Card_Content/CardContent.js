import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight, faHeart,faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';





const CardContent = (props) => {

    const {strLeague, strTeamFanart4, strTeam, idTeam,strTeamBanner,strAlternate,intFormedYear} = props.club;

    
// const [btnLike , setBtnLike] = useState()
const [likeColor, setLike] = useState('');
const [likeCount, setLikeCount] = useState(78);
const handleLikeColor = () => {
    const color = likeColor ? '' : 'red';
    if (likeColor == '') {
        setLikeCount(likeCount + 1)
    }
    else{
        setLikeCount(likeCount - 1)
    }
    setLike(color);
    
}
const [dislikeColor, setDisike] = useState('');
const [dislikeCount, setDisikeCount] = useState(9);
const handleDisikeColor = () => {
    const color = dislikeColor ? '' : 'red';
    setDisike(color);
    setDisikeCount(dislikeColor ? dislikeCount - 1 : dislikeCount + 1)
}

const [loveCount, setCount] = useState(98);
const [loveColor, setLove] =useState('');
const handleLove = () => {
    const color = loveColor ? '' : 'red';
    setLove(color);
    setCount(loveColor? loveCount - 1 : loveCount + 1)
}

// const {name, setName} =useState("");
useEffect(() => {
    document.title =`count ${loveCount}`
})
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 col">



            {/* <input type="text" value={name} onChange={e => setName(e.target.value)}/> */}
            {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
            {/* <FontAwesomeIcon onClick={handleLikeColor} color={likeColorDewa} className='likeButton' icon={faHeart} /> */}
            
            
            
            <div className="card cardContainer text-center mb-4 "> 
                <img className='cardContainer' src={strTeamFanart4} alt=""/>
                <img  src={strTeamBanner} alt=""/>
                <div className="card-body">

                    <h5 className="card-title">
                        <span className='text-success'> Team Name: {strTeam}</span>
                    </h5>

                    <p className="card-text">
                        <small>League 1: </small>{strLeague} <br/>
                        <small>League 2: </small>{strAlternate} <br/>
                        <small>Established : </small>{intFormedYear} 
                    </p>


                    <Link className='btn btn-primary' to={`/club/${idTeam}`}>Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Link> <br/>
                    <div className="d-flex">

                        <button className='m-1'>{loveCount}  <FontAwesomeIcon onClick={handleLove} color={loveColor} className='likeButton' icon={faHeart} /></button>

                        <button className='m-1'>{likeCount}  <FontAwesomeIcon onClick={handleLikeColor} color={likeColor} className='likeButton' icon={faThumbsUp} /></button>

                        <button className='m-1'>{dislikeCount}  <FontAwesomeIcon onClick={handleDisikeColor} color={dislikeColor} className='likeButton' icon={faThumbsDown} /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContent;