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
          <div className='problemset'>
            <p key={props.data.index}>{item.name}</p>
          </div>
        )
       })}
    </div>
  )
}
export default ProblemSet