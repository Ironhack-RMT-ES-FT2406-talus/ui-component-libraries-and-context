import { Link } from 'react-router-dom'

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';

function BookList() {

  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div>
      
      <h1>Book List</h1>

      <div className='d-flex flex-column justify-content-center align-items-center'>

        <Card style={{ width: '180px' }}>
          <Card.Img src={img1} alt="cover" width={120} height={200}/>
          <Card.Title>Book1</Card.Title>
          <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
          <Link to="/book/details/1"><Button variant={isDarkTheme ? "dark" : "primary"}>See Book 1</Button></Link>
        </Card>

        <Card style={{ width: '180px' }}>
          <Card.Img src={img2} alt="cover" width={120} height={200}/>
          <Card.Title>Book2</Card.Title>
          <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
          <Link to="/book/details/2"><Button variant={isDarkTheme ? "dark" : "primary"}>See Book 2</Button></Link>
        </Card>

        <Card style={{ width: '180px' }}>
          <Card.Img src={img3} alt="cover" width={120} height={200}/>
          <Card.Title>Book3</Card.Title>
          <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
          <Link to="/book/details/3"><Button variant={isDarkTheme ? "dark" : "primary"}>See Book 3</Button></Link>
        </Card>

      </div>


    </div>
  )
}

export default BookList