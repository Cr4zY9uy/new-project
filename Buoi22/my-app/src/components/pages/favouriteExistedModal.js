import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FavouriteExisted(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Notice
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='text-center'>
                    Product was in your favourite item list
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default FavouriteExisted;