import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArticleCard from 'components/atoms/ArticleCard/ArticleCard';
import { HiOutlineRefresh } from 'react-icons/hi';
import Loader from 'components/atoms/Loader/Loader';
import Snackbar from 'components/atoms/Snackbar/Snackbar';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to left bottom,
    #7d62f2,
    #7f65ee,
    #8168ea,
    #836ae6,
    #856de2,
    #8a6cdc,
    #8f6bd6,
    #936ad0,
    #9a65c7,
    #9f60be,
    #a45bb5,
    #a757ac
  );
  color: white;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.062) 0 3px 5px;
  position: relative;

  & h2 {
    font-size: 32px;
    font-weight: bold;

    & span {
      font-size: 16px;
      margin: 0 8px;
      color: #dbdbdb;
    }
  }
`;

const ArticleBox = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 32px 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 1400px) {
    width: 80%;
  }

  @media only screen and (max-width: 1100px) {
    width: 90%;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: unset;
  }
`;

const RefreshButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  text-transform: uppercase;
  color: white;
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
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

const App = () => {
  const [isLoader, setLoader] = useState(false);
  const [showSnack, setShowSnack] = useState(true);
  const [articles, setArticles] = useState([]);
  const [errorCode, setErrorCode] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/news')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Error code: ${response.status}`));
      })
      .then((data) => {
        setArticles(data);
        setLoader(false);
      })
      .catch((e) => {
        setErrorCode(e.message);
        setLoader(false);
        setShowSnack(true);
        setTimeout(() => setShowSnack(false), 5000);
      });
  }, [isLoader]);

  return (
    <Container>
      {isLoader && <Loader setLoader={setLoader} />}
      {showSnack && (
        <Snackbar message={errorCode} setShowSnack={setShowSnack} />
      )}
      <Header>
        <h1>News</h1>
        <h2>
          <span>Category</span>Business<span>Category</span>
        </h2>
        <h2>
          <span>Country</span>Poland<span>Country</span>
        </h2>
        <RefreshButton
          onClick={() => {
            setLoader(true);
          }}
        >
          <HiOutlineRefresh size={24} style={{ marginRight: '8px' }} />
          refresh
        </RefreshButton>
      </Header>
      <ArticleBox>
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            author={article.author}
            description={article.description}
          />
        ))}
      </ArticleBox>
    </Container>
  );
};

export default App;
