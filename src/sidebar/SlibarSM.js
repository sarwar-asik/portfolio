import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useNavigate, useNavigation } from "react-router-dom";
import profileImg from "../assets/small-size.png";
import logOut from "../assets/logout.png";
import { AuthContext } from "../firebase/AuthProvider";
import "../custom.css";

const Container = styled.div`
  position: fixed;
  z-index: 50;
  .active {
    // border-right: 4px solid white;
    h5 {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  // background-color: #2193b0;
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
    background-color: white;
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
  background-color: blac;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
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
  color: whit;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blac;
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
  color: whit;
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
    filter: invert(92%) sepia(4%) saturate(103%) hue-rotate(199deg)
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
  // background-color: black;
  color: white;
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid grey;
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
  color: red;
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

const theme1 = "#064f60";
const theme2 = "black";

const SidebarSM = () => {
  const navigate = useNavigate();

  const { theme, setTheme, logout, user } = useContext(AuthContext);
  // console.log(user);
  const handleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
    console.log(theme);
  };
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <Container
      className={`sm:h-auto lg:h-full`}
      style={{ backgroundColor: `${theme ? theme2 : theme1}` }}
    >
      <Button
        className={`${theme ? "blac" : "bg-[#064f60"}`}
        clicked={click}
        onClick={() => handleClick()}
      ></Button>

      <SidebarContainer
        className={`${
          click
            ? "slideContainer"
            : "hidden lg:flex flex-col items-center justify-between"
        } `}
      >
        {/* <Logo>
          <img
            src="https://react-sidebar.vercel.app/static/media/home-solid.831db11d.svg"
            alt=""
          />
        </Logo> */}
        <label class="flex flex-col gap-2 px-3 relative items-center cursor-pointer ">
          <input
            onClick={handleTheme}
            type="checkbox"
            value=""
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[9px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-00"></div>

          <span
            class={`ml-3 text-sm font-semi-bold  ${
              theme ? `text-white` : `text-white`
            }`}
          >
            {theme ? "Light" : "Dark"}
          </span>
        </label>
        {/* side section '''' */}
        <SlickBar
          clicked={click}
          className={`${
            theme ? `text-white bg-[${theme2}]` : `text-white bg-[${theme1}]`
          } hidden `}
        >
          {/* 1 */}
          <Item onClick={() => setClick(false)} activeClassName="active" to="/">
            {/* <img
              src="https://react-sidebar.vercel.app/static/media/home-solid.831db11d.svg"
              alt=""
            /> */}
            <button className="font-bold text-xl ">H</button>
            <Text clicked={click}>Home</Text>
          </Item>

          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
            <button className="font-bold text-xl ">P</button>
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/">
            <button className="font-bold text-xl ">S</button>
            <Text clicked={click}>Sign Up</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to={
              user?.email === "sarwarasik@gmail.com"
                ? "/addDetails"
                : "/notAdmin"
            }
          >
            <button className="font-bold text-xl ">D</button>

            <Text clicked={click}>Dash Board</Text>
          </Item>

          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/about"
          >
            <button className="font-bold text-xl ">A</button>
            <Text clicked={click}>About</Text>
          </Item>
        </SlickBar>

        <Link onClick={() => handleProfileClick()} to="/about">
          <Profile
            className={`${
              theme ? `text-white bg-[${theme2}]` : `text-white bg-[${theme1}]`
            } `}
            clicked={profileClick}
          >
            <img src={profileImg} alt="Profile" />
            <Details clicked={profileClick}>
              <Name>
                <h4>Sarwar Hossain</h4>
              </Name>

              <Logout>
                <button onClick={logout} className="btn btn-error ">
                  {" "}
                  Logout
                </button>
              </Logout>
            </Details>
          </Profile>
        </Link>
      </SidebarContainer>
    </Container>
  );
};

export default SidebarSM;
