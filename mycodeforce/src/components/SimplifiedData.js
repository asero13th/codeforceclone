import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SolvedProblemTags from './SolvedProblemTags';

function SimplifiedData(props) {

  const solvedProblems = props.data.filter((item)=>{
    return (
      item.verdict === "OK"
    )
  })
 console.log(props.data)
  return (
    <div className='ml-2'>
        <div className='ml-2'>
        <Card style={{ width: '18rem' }}> 
            <Card.Body className='submmision-card'>
                <Card.Title>{props.data.length} total submmsions</Card.Title>
                <div className='total-problem-in-circle'>
                    <p>{solvedProblems.length}/2867 <br/>problem solved</p>
                </div>
                <Button variant="primary">Problems</Button>
            </Card.Body>
        </Card>
        </div>
        <div>
          <ul>
            <li className='problem-tag'>programming language: {props.data[0].programmingLanguage}</li>
          </ul>
          
            <h5>Topic covered</h5>
            <SolvedProblemTags data = {props.data}/>
        </div>
    </div>
  )
}

export default SimplifiedData   