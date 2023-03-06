
import { Components } from '@/admin/mock-data/components-list/components';
import { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, Col, TabContent, TabPane, Row,
    Card, CardTitle, CardText, Container, FormGroup, Label, Input
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { IGenericModal } from './IGenericModal';
import { IComponent } from '@/admin/helpers/interfaces/IComponent';

export default function GenericModal({ modal, toggle, className, closeBtn, confirmBtn, id, props }: IGenericModal) {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState("")

    const [componentProps, setComponentProps] = useState(props);

    const setProps = (e: any, key: any) =>{

        setComponentProps(()=>{
            componentProps[key] = e.target.value;
            return componentProps
        }) 

        console.log(componentProps);
        


    }

    const handleChange = function (event: any) {
        setFilter(event.target.value)
    }

    const selectComponent = (component: IComponent) => {

        let newComponent = JSON.parse(JSON.stringify({ ...component, id: Math.floor(Math.random() * 101) }))

        dispatch.pageModel.addChild({ id: id, component: newComponent })
        toggle();

        confirmBtn
    }

    const validate = ()=>{

        console.log()
        toggle()
    }

    return (
        <Modal isOpen={modal} toggle={toggle} className={className} size={props !== undefined ? "lg" : "xl"} centered fullscreen="xl">
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
                <Container className={`d-flex  ${props ? "justify-content-start" : "justify-content-center"} align-items-start`}>
                    {
                        props ? Object.keys(props).map((item, index)=>{

                            return    <>
                            <FormGroup row className='w-75 d-flex'>
                                <Label
                                    sm={2}
                                >
                                    {item}
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        type="text"
                                        value={props[item]}

                                    />
                                </Col>
                            </FormGroup>
                        </>
                        })
                         





                            :
                            <Row xs="6" className='d-flex justify-content-center align-items-center '>
                                {Components.map((item) => {
                                    return <>
                                        {item.type.toLowerCase().indexOf(filter) > -1 && <Col className='d-flex justify-content-center align-items-center flex-column m-2 p-5 border pointer' onClick={() => selectComponent(item)}>
                                            <i className={item.icon}></i>
                                            <span>{item.type}</span>
                                        </Col>}
                                    </>
                                })}
                            </Row>}
                </Container>
            </ModalBody>
            <ModalFooter>

                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                <Button color="secondary" onClick={validate}>
                    validate
                </Button>
            </ModalFooter>
        </Modal>
    )
}
