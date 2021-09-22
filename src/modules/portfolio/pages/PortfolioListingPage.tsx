import Container from 'Components/Container';
import Navbar from 'Components/Navbar';
import styled from 'styled-components';

const PortfolioListingPage = () => (
  <Container>
    <Navbar />
    <div style={{ marginTop: 30 }}>
      <Text>Welcome to crypto portfolio manager</Text>
      <Text>Use search on the right to add coins to your portfolio</Text>
    </div>
  </Container>
);

const Text = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-size: x-large;
`;

export default PortfolioListingPage;
