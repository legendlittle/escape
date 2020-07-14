import React from "react";
import { Button } from 'react-bootstrap';
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


            <Container className='container-fluid text-center'>
                <h1 className='text-center'>
                    <Welcome> Welcome </Welcome>
                    <To> to </To>
                    <Breakout> Exit Please! </Breakout>
                </h1>
                <h3 className='text-center font-weight-bold text-primary'>
                    An interactive solo or team escape room style Web App!
            </h3>
                <br>
                </br>
                <h4 className='text-center font-weight-bold '>
                    Press Start if you're ready to try and reach the exit!
            </h4>

                <Button className='btn button-primary font-weight-bold'>Start here!</Button>
            </Container>
        </>


    )

}

export default Main;