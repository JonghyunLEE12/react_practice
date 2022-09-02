// useSelector 를 통해 state의 값을 받아올 수 있음
import {useDispatch , useSelector} from 'react-redux'
import Box from './components/Box'


function App() {
  let number = useSelector((state) => state.number)
  let id = useSelector( (state) => state.id)
  let password = useSelector ((state) => state.password)
  let dispatch = useDispatch()

  const onChange = () => {
    // dispatch ( type , payload(선택사항) )에서는 type 을 꼭 써줘야함
    // type 은 action 의 이름
    // payload : 필요한 정보를 보내줄 수 있음 매개변수와 같은 느낌
    dispatch({type: "INCREMENT", payload : {num:5}})
  }
  const Decrement = () => {
    dispatch({type: "DECREMENT"})
  }
  const login = () => {
    dispatch({type: "LOGIN", payload : {id:"hi",password:"123"}})
  }
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onChange}>증가</button>
      <button onClick={Decrement}>감소</button>
      <button onClick={login}>로그인</button>
      <h1>{id} , {password}</h1>
      <Box/>
    </div>
  );
}

export default App;
