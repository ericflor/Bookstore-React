import './App.css';
import axios from 'axios';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';

const App = () => {

  axios(`http://localhost:8080/books`).then(response => {console.log(response.data)});

  return (
    <Layout>
      <BookContainer></BookContainer>
    </Layout>
  );
}

export default App;
