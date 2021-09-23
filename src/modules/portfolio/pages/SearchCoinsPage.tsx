import Container from 'Components/Container';
import Navbar from 'Components/Navbar';
import React, { useEffect } from 'react';
import { getCoinsList } from 'services/coinMarketCap.service';

const Search = () => {
  useEffect(() => {
    getCoinsList().then((data) => {
      console.log(data);
    });
  });

  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Search;
