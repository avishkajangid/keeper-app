import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Title = styled(NavLink)`
  text-decoration: none;
`;

const Tab = styled(NavLink)`
  position: relative;
  text-decoration: none;
  float: right;
  bottom: 44px;
`;

function Header() {
  return (
    <header>
      <Title to="/">
        <h1>
          <HighlightIcon />
          Keeper
        </h1>
      </Title>
      <Tab to="/all">
        <h1>Notes</h1>
      </Tab>
    </header>
  );
}

export default Header;
