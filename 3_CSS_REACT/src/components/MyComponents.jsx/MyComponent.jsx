import React from 'react'
import '../MyComponents.css/MyComponent.css'

const MyComponent = () => {
  return (
    <div><p>Esse paragrafo está no MyComponent.jsx</p>
    <p className="my-comp-paragraph">Esse paragrafo está no MyComponent.jsx porém possui uma className</p>
    </div>
  )
}

export default MyComponent