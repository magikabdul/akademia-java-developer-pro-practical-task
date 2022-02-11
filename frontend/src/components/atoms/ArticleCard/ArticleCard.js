import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background: linear-gradient(
    to right bottom,
    #fd4d3e,
    #fe315c,
    #f61a7a,
    #e51b97,
    #c830b3
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 16px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

const Author = styled.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: right;
`;

const Description = styled.div`
  padding: 16px;
  font-size: 14px;
  text-align: justify;
`;

const ArticleCard = ({ title, author, description }) => (
  <Container>
    <Title>{title}</Title>
    <Author>&ldquo;{author}&rdquo;</Author>
    <Description>{description}</Description>
  </Container>
);

ArticleCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

ArticleCard.defaultProps = {
  title: 'title',
  author: 'author',
  description: 'description',
};

export default ArticleCard;
