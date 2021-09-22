import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa';
import styled from 'styled-components';

const Navbar = () => (
  <NavContainer>
    <h3>$3</h3>
    <Link href="/">
      <h1 style={{ cursor: 'pointer' }}>
        FlyToMoon
        <FaRocket size="21" color="red" />
      </h1>
    </Link>
    <Link href="/search">
      <BsSearch style={{ cursor: 'pointer' }} size="21" />
    </Link>
  </NavContainer>
);

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  box-shadow: 0 0 3px black;
  padding: 0 25px;
`;

export default Navbar;
