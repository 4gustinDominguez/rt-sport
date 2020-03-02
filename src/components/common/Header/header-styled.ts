import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
  background-color: #46acc2;
  & > .logoHeader:first-child{
    margin-left: 0;	
    padding:0 15px;
  }
  @media (max-width: 1000px){}
  @media (max-width: 700px){
		flex-direction: column;		
	  &:h2{
      padding:0;
	  }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  padding: 15px 0
`;

export const NavbarItems = styled.li`
  margin: 0 15px;
`;