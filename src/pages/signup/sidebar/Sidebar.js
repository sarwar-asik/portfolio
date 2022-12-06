import React, { useState } from "react";

//All the svg files

import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import home from '../../../assets/homeColor.png'
import signup from '../../../assets/signUp.png'
import login from '../../../assets/loginColor.png'
import about from '../../../assets/profile.png'
import team from '../../../assets/team.png'
import projects from '../../../assets/project.png'
import profileImg from '../../../assets/small-size.png'
import logOut  from '../../../assets/logout.png'


const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid white;
    h5 {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color:white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: black;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  h5 {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: black;
  color: white;
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: grey;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 3rem;
  background-color: transparent;
  color:red;
  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <Container>
    <Button clicked={click} onClick={() => handleClick()}>
      Click
    </Button>
    <SidebarContainer>
      <Logo>
        <img src="https://react-sidebar.vercel.app/static/media/home-solid.831db11d.svg" alt="" />
      </Logo>
      <SlickBar clicked={click}>
        {/* 1 */}
      <Item
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/"
        >
         <img src={home} alt="" />
          <Text clicked={click}>Home</Text>
        </Item>
        {/*  */}
        <Item
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/signup"
        >
        <img src={signup} alt="" />
          <Text clicked={click}>Sign Up</Text>
        </Item>
        <Item
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/login"
        >
        <img src={login} alt="" />
          <Text clicked={click}>Log In</Text>
        </Item> 
          <Item
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/"
        >
        <img src={projects} alt="" />
          <Text clicked={click}>Project</Text>
        </Item>  
         <Item
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/"
        >
        <img src={about} alt="" />
          <Text clicked={click}>About</Text>
        </Item>
      </SlickBar>

      <Profile clicked={profileClick}>
        <img
          onClick={() => handleProfileClick()}
          src={profileImg}
          alt="Profile"
        />
        <Details clicked={profileClick}>
          <Name>
            <h4>Sarwar Hossain</h4>
        
          </Name>

          <Logout>
            <img src={logOut} alt="" />
          </Logout>
        </Details>
      </Profile>
    </SidebarContainer>
  </Container>
  );
};

export default Sidebar;
