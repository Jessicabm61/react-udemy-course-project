import ChangeCounter from '../components/ChangeCounter.jsx'
import { useCounterContext } from '../hooks/useCounterContext'
const Home = () => {

  const {counter} = useCounterContext()
  return (
    <div>
      <h3>Home</h3>
      <p>Contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Home