import React, { useState } from 'react'
import { Container, Navbar, Form, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import userImage from '../img/user.png'

const Navigation = () => {
    const [userInterface, setUserInterface] = useState(false);

    const fadeUserInfo = () => {
        setUserInterface(!userInterface)
    }

    /* const userInfo = `userInfo ${userInterface ? 'fadeIn' : 'fadeOut'}`; */
    const userInfoStyle = {
        opacity: userInterface ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      };
  return (
    <>
        <Navbar expand="lg" variant='dark' bg='dark'>
            <Container fluid>
                <Navbar.Brand href="/"><img width={100} src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='navArea'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '120px' }}
                        navbarScroll
                    >
                        <Link to='/' className="navItem">Home</Link>
                        <Link to='/movies' className="navItem">Movies</Link>
                        <Link to='/tvs' className="navItem">Tv Series</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
                <div className='user'>
                    {/* <img src={userImage} alt="" /> */}
                    <div className="userImage" onClick={fadeUserInfo}></div>
                    {userInterface && 
                        <div className='userInfo' style={userInfoStyle}>
                            <img src={userImage} alt="" />
                            <p className="loginInfo">로그인 정보 없음</p>
                            <div className="linkWrap">
                                <Link to='/login' className='login'>로그인</Link> · <Link className='new'>회원가입</Link>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </Navbar>
    </>
  )
}

export default Navigation