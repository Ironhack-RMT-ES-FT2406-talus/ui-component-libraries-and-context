
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

function Home() {
  return (
    <div>
      
      <h1>Welcome!</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <img src={img1} alt="cover" width={120} height={200}/>
      <img src={img2} alt="cover" width={120} height={200}/>
      <img src={img3} alt="cover" width={120} height={200}/>

    </div>
  )
}

export default Home