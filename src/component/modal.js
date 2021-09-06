import {useState} from 'react'
import {Button,Form,Modal} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


function Modale({handlaAddMovie}) {
  const [show, setShow] = useState(false);
  const [disableSave, setDisableSave] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [newMovie, setNewMovie] = useState({
  title:"",
  description:"",
  posterUrl:"",
  rate:0,
})
const handleChange = (e)=>{
   setNewMovie({...newMovie, [e.target.name]:e.target.value}) 
   if(newMovie.title !='' && newMovie.description !='' && newMovie.posterUrl !='')
   setDisableSave(false)
   else
   setDisableSave(true)
  
}
const handleSave = ()=>{
 


  handlaAddMovie(newMovie)
  handleClose()
}
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"red"}}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>title</Form.Label>
    <Form.Control name="title" type="text"  onChange={handleChange} placeholder="Enter title" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>description</Form.Label>
    <Form.Control  name="description" type="text" onChange={handleChange}  placeholder="description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>postURL</Form.Label>
    <Form.Control name="posterUrl" type="text" onChange={handleChange}  placeholder="postURL" />
  </Form.Group>
  <StarRatingComponent name="star" onStarClick={(nextValue, prevValue, name)=>setNewMovie({...newMovie,rate:nextValue})}/>
 
  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={disableSave} variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale
