```react
import React, { useState , useEffect } from "react";

import styles from './App.module.css'


// 모든 코드들은 변화 화게 되면 ReRendering 이 발생
// API  등을 호출 하는 상황에서는 리렌더링이 발생하면 안됨
// 해당 문제를 해결하기 위해 useEffect를 사용

function App() {
  const [counter , setValue] = useState(0)
  const [keyword , setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword((event.target.value))
  console.log("i run all the times")

  // Case 1
  // const iRunOnlyOnce = () => {
  //   console.log("call an api")
  // }
  // useEffect(iRunOnlyOnce, [])

  // Case 2 Easy Ver.
  // useEffect 는 리렌더링을 발생 하지 않음 => api를 호출 할 때 용
  // 아래 코드는 counter 가 변화 할 때에도 keyword 도 동시에 리렌더링
  useEffect(()=> {
    console.log("Call The Api....")
  }, [])

  // keyword만 변화할때 리렌더링 되도록 useEffect를 사용
  useEffect(()=> {
    if (keyword !== "" && keyword.length > 5){
      console.log("Search",keyword)
    }
  },[keyword])
  return (
    <div>
      <input
      value = {keyword} 
      onChange={onChange} 
      type="text" placeholder="Search here..." />

      <h1 className={styles.title}>Welcome back!!!!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>ClickMe</button>
    </div>
  );
}

export default App;

```

