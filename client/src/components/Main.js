import React from "react";
import { Navbar, Nav, Row, Col, Image } from "react-bootstrap";
import styled from 'styled-components';

function Main(props) {
    const Container = styled.div`
    background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);`
    const Welcome = styled.span`
    color: #002661;
    &:hover {
        font-size:1.5em;
    }
    font-weight:bold;
    transition:0.5s;  `
    const To = styled.span` 
    color: #6018DC;
    &:hover {
        font-size:1.5em;
    }
    font-weight:bold;
    transition:0.5s;`
    const Breakout = styled.span`
    color: #E80505;
    &:hover {
        font-size:1.5em;
    }
    font-weight:bold;
    transition:0.5s;`


    return (
        <>


            <Container classNam='container-fluid'>
                <h1 className='text-center'>
                    <Welcome> Welcome </Welcome>
                    <To> to </To>
                    <Breakout> Breakout! </Breakout>
                </h1>
                <p className='text-center font-weight-bold'>
                    An interactive solo or team escape room style Web App!
            </p>
            </Container>
        </>


    )

}

export default Main;