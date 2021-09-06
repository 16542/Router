
import {Form, FormControl, Nav, Navbar, Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'
import Modal from "./modal"


const Head =({handleFilter,handleRate,handlaAddMovie})=>{
    return(
        <>
<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#" style={{color:"white"}}>Movie</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav

      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
         <Modal handlaAddMovie={handlaAddMovie} > </Modal> 
      <Nav.Link href="#action1" style={{color:"white"}}>Home</Nav.Link>
    </Nav> 
    <Form className="d-flex " style={{marginLeft:"50px"}}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>handleFilter(e.target.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
      <StarRatingComponent emptyStarColor={"white"} onStarClick={(nextValue, prevValue, name)=>handleRate(nextValue)}/>
</Navbar>
</>
    )
}

export default Head




