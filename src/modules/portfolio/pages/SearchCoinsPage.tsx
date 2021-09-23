import { useEffect } from 'react';
import Container from 'Components/Container';
import Navbar from 'Components/Navbar';
import React from 'react';
import { getCoinsList } from 'services/coinMarketCap.service';

const Search = () => {
    useEffect(async () => {
        console.log(await getCoinsList());
    });
    return (
        <Container>
            <Navbar />
        </Container>
    );
};

export default Search;
