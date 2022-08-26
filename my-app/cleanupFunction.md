```react-native
import React, { useState , useEffect, useInsertionEffect } from "react";

function Hello(){
  // cleanupFunction : 함수가 언제 파괴되는지 감지 가능
  // cleanupFunction 은 자주 사용되지는 않지만 특정한 경우 사용해야함
  function byeFn(){
    console.log('bye :( ')
  }
  function hiFn(){
    console.log('created :)')
    // hiFn이 파괴 되는 순간에 byeFn을 리턴을 해준다.
    return byeFn
  }
  useEffect(hiFn,[])

  
  // 아래 방식으로 쓰는게 좀 더 쉬움
  useEffect(()=>{
    console.log("hi :)")
    return () => console.log("bye :(")
  },[]
  )
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {/* showing === true 일때 실행 */}
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App;


```