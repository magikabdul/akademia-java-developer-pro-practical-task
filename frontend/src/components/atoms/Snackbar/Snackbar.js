import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BiErrorAlt } from 'react-icons/bi';

const Container = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  min-width: 300px;
  background-color: darkred;
  color: white;
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
`;

const Message = styled.div``;

const Snackbar = ({ message, setShowSnack }) => {
  return (
    <Container onClick={() => setShowSnack(false)}>
      <BiErrorAlt size={24} style={{ marginRight: 16 }} />
      <Message>{message}</Message>
    </Container>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  setShowSnack: PropTypes.func.isRequired,
};

Snackbar.defaultProps = {};

export default Snackbar;
