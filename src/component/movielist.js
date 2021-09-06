import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Moviecard from './moviecard'
import {Link} from'react-router-dom';


const Movielist = ({list}) => {
    return (
        <Container>
       
       <Row>
        {list.length ?list.map( (elm,index)=><Col md={4} xs={12}> <Moviecard key={index} movie={elm}> </Moviecard></Col>) : <h2 style={{color:"black"}}>No Movie Found</h2>}
        </Row>
        
        </Container>
       
       // <Link to={`/${movie.title}`}>
       
       // </Link>
            
       
    )
}

export default Movielist