import Editor from "@/admin/helpers/editor/Editor";
import CardBlog from "@/common/components/cardBlog/CardBlog";
import React, { useState } from "react";
import { index } from "@/admin/mock-data/mock-pages";
import { Card, CardBody, Col, Container, Row, FormGroup, Label, Input, CardHeader, Button, CardFooter } from "reactstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";



export default function Page() {

    let pageContent = useSelector(state => state?.pageModel?.content);
    let pagetitle = useSelector(state => state?.pageModel?.title)
    const dispatch = useDispatch();

    function navigateTo(){
        dispatch.pageModel.setPage({ page: "Index" })
      }

    const [title, setTitle] = useState(pagetitle)

    const changeTitle = (event: any)=>{

        console.log("test");
        
        setTitle(event.target.value)
    }

    return (
        <Container fluid >

            <Row className="mt-5">
                <Col xs={8}>
                    <Card>
                        <CardBody>
                            {Editor(pageContent)}
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={4} >
                    <Card>
                        <CardHeader className="bg-white">
                            <div className="d-flex justify-content-end">
                                <i className="bi bi-gear-fill"></i>

                            </div>
                        </CardHeader>
                        <CardBody className="mt-5">
                            <FormGroup row>
                                <Label for="exampleEmail" sm={4}>Page name:</Label>
                                <Col sm={8}>
                                    <Input type="text" id="exampleEmail" placeholder="page name" value={title} onChange={()=> changeTitle(event)}/>
                                </Col>
                            </FormGroup>

                        </CardBody>
                        <CardFooter className="bg-white mt-2 mb-2 d-flex justify-content-end">

                            <div>
                                <Button outline color="success" className="">
                                    validate
                                </Button>
                                {" "}
                                <Button color="secondary" onClick={navigateTo}>
                                    cancel
                                </Button>
                            </div>

                        </CardFooter>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}