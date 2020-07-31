import React, {useState} from "react";

const A = () => {
  const [a, b] = useState('aaaa');
  return <>{a}</>
}
const App = (props) => {
  const [a, b] = useState(1111);
  const [c, d] = useState(1111);

  console.log(a)
  return (
    <div>
      <A/>
      <ul>
        <li onClick={() => b(a + 1)}>{a}</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
}
React.render(<App/>, document.getElementById('root'))
