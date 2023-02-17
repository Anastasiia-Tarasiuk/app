import styled from "@emotion/styled";

export const MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;

    @media screen and (min-width: 320px) {
        width: 300px;
    }

    @media screen and (min-width: 768px) {
        width: 664px;
    }

    @media screen and (min-width: 1024px) {
        width: 996px;
    }

`