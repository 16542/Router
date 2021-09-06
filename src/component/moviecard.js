import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'

const Moviecard = ({movie}) => {
    return (
      <Link to={`/trailer/${movie.id}`}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
   <StarRatingComponent value={movie.rate} />
  </Card.Body>
</Card>
      </Link>
    )
}

export default Moviecard