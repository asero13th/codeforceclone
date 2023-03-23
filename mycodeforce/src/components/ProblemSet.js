import React from 'react'

const ProblemSet = (props) => {
 props.sendData()
 console.log(props.data)
  return (
    <div>
       {props.data.filter(item => item.tags[0] === "binary search")
       .map( (item) => 
       {
        return(
          <p key={props.data.index}>{item.name}</p>
        )
        
       })}
    </div>
  )
}
export default ProblemSet