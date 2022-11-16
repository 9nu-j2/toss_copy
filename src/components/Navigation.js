import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 29, 58, 0.18) !important;
  backdrop-filter: blur(10px);
`;

const NavCon = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const InnerCon = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const Item = styled.div`
  padding: 0 8px;
  color: #4e5968;
`;

const Nav = () => {
  return (
    <Container>
      <NavCon>
        <InnerCon>
          <IconBox>Icon</IconBox>
          <Menu>
            <Item>
              <a>브랜드 스토리</a>
            </Item>
            <Item>
              <a>도전</a>
            </Item>
            <Item>
              <a>응원카드</a>
            </Item>
            <Item>
              <button>공유하기</button>
            </Item>
          </Menu>
        </InnerCon>
      </NavCon>
    </Container>
  );
};

export default Nav;
