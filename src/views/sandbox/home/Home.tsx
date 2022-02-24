import { Button } from 'antd'
import axios from 'axios'

const Home = () => {
  const getAxios = () => {
    // _embed 向下查找
    // _expand 向上查找
    axios.get('http://localhost:8000/posts/2').then((res) => {
      console.log(res.data)
    })
  }
  return (
    <div>
      <Button onClick={getAxios}>Axios</Button>
    </div>
  )
}

export default Home
