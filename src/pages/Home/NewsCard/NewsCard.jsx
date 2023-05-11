import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, title, details,image_url, author, rating, total_view} = news;
    return (
        <div>
            <Card className='mb-3'>
                <Card.Header className='d-flex'>
                    <Image style={{height: '45px'}} src={author?.img} roundedCircle />
                    <div className='ms-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div className='ms-auto pt-3'>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img className='w-100' src={image_url} alt="" />
                    <Card.Text>
                    {
                        details.length < 200 ? <>{details}</> :
                        <>{details.slice(0, 200)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex'>
                    <div className='flex-grow-1'>
                        <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;