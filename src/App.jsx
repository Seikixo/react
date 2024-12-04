import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Food from './components/Food/Food.jsx'
import Card from './components/Card/Card.jsx'
import Button from './components/Button/Button.jsx'
import Input from './components/Input/Input.jsx'
import Status from './components/Status/Status.jsx'
import Category from './components/Category/Category.jsx'
import Order from './components/Order/Order.jsx'

function App() {

  const category = [
    {id: 1, name: "Fruits", aisle: 1}, 
    {id: 2, name: "Vegetables", aisle: 2}, 
    {id: 3, name: "Drinks", aisle: 3}, 
    {id: 4, name: "Breads", aisle: 4}
];
  
  return(
    <>
      <Header company="Foods" year={2020} />
      <Status isOnline={false}/>
      <Category section={category}/>
      <Card />
      <Footer />
      <Input />
      <Button />
      <Order />
    </>

  );
  
}

export default App
