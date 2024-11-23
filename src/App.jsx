import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Food from './components/Food/Food.jsx'
import Card from './components/Card/Card.jsx'
import Button from './components/Button/Button.jsx'
import Input from './components/Input/Input.jsx'
import Status from './components/Status/Status.jsx'

function App() {
  
  return(
    <>
      <Header company="Foods" year={2020} />
      <Status isOnline={false}/>
      <Card />
      <Footer />
      <Input />
      <Button />

    </>

  );
  
}

export default App
