import Editor from "@/admin/helpers/editor/Editor";
import CardBlog from "@/common/components/cardBlog/CardBlog";
import React from "react";
import { index } from "@/admin/mock-data/mock-pages";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useSelector } from 'react-redux';



export default function Page() {

    let pageContent  = useSelector(state => state?.pageModel?.content);

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
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                </Col>

            </Row>

        </Container>
    )
}