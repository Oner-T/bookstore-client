import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Cart from "./Cart.js";
import Image from "next/image";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 50px;
`;

const StyledLogo = styled.div`
  width: 371px;
  height: 101px;
  background-color: #edf9f2;
  border-radius: 13px;
  font-size: 3rem;
  color: #aea665;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchBox = styled.input`
  border: solid 1px #6fcf97;
  border-radius: 13px;
  width: 200px;
  height: 100%;
  padding: 10px;
  font-size: 2rem;
  outline: none;
  &:focus {
    border: solid 1px red;
    border-radius: 13px;
  }
`;

const Profile = styled.div``;
export default class Navbar extends Component {
  render() {
    return (
      <Layout>
        <StyledLogo>
          bookstore
          <img src='/logo.png' layout='fill' />
        </StyledLogo>
        <SearchBox></SearchBox>
        <Cart></Cart>
        <Profile></Profile>
      </Layout>
    );
  }
}
