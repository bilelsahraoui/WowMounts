import React from 'react';
import styled from 'styled-components/native';

const Pagination = ({page, setPage, slice, setSlice}) => {
  return (
    <Container>
      {slice[0] === 0 && slice[1] === 10 ? (
        <PaginationButton>{' <-- '}</PaginationButton>
      ) : (
        <PaginationButton
          onPress={() => {
            setPage(page - 1);
            setSlice([slice[0] - 10, slice[1] - 10]);
          }}>
          {' <-- '}
        </PaginationButton>
      )}
      <PaginationButton>Page {page}</PaginationButton>
      <PaginationButton
        onPress={() => {
          setPage(page + 1);
          setSlice([slice[0] + 10, slice[1] + 10]);
        }}>
        {' --> '}
      </PaginationButton>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
`;

const PaginationButton = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
`;

export default Pagination;
