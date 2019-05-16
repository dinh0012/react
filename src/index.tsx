import * as React from './react'
import {createElement} from './react'
const App = (props) => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
}
React.render(<App/>, document.getElementById('root'))
