
import { Components } from '@/admin/mock-data/components-list/components';
import { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, Col, TabContent, TabPane, Row,
    Card, CardTitle, CardText, Container
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { IGenericModal } from './IGenericModal';
import { IComponent } from '@/admin/helpers/interfaces/IComponent';

export default function GenericModal({ modal, toggle, className, closeBtn, confirmBtn, id }: IGenericModal) {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState("")

    const handleChange = function (event: any) {
        setFilter(event.target.value)
    }

    const selectComponent = (component: IComponent)=>{

        dispatch.pageModel.addChild({id: id, component: component})
        toggle();
        console.log(id);
        
        confirmBtn
    }

    return (
        <Modal isOpen={modal} toggle={toggle} className={className} size="xl" centered fullscreen="xl">
            <ModalHeader toggle={toggle} close={closeBtn}>
                Components  
            </ModalHeader>
            <ModalBody>
                <div className='d-flex justify-content-end'>
                    <div className="input-group mb-3 w-25">
                        <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange} />
                        <div className="input-group-append">
                            <button className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row xs="6" className='d-flex justify-content-center align-items-center'>
                        {Components.map((item) => {
                            return <>
                                {item.type.toLowerCase().indexOf(filter) >-1   && <Col className='d-flex justify-content-center align-items-center flex-column m-2 p-2 border pointer' onClick={()=>selectComponent(item)}>
                                    <i className={item.icon}></i>
                                    <span>{item.type}</span>
                                </Col>}
                            </>
                        })}
                    </Row>
                </Container>
            </ModalBody>
            <ModalFooter>
                
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}
