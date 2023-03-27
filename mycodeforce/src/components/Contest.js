import React from 'react'
import useFetchApi from './useFetchApi'
import { ListGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
 const BASE_URL = "https://codeforces.com/api/contest.list?gym=false";

function Contest() {
    const {data, isLoading, error} = useFetchApi(BASE_URL);
    if (isLoading){
      return <div>loading..</div>
    }

    if (error){
      return <div>error -  {error}</div>
    }

    if (data == null){
      return
    }

    console.log(data)


  return (
    <div>
      {data.result.filter(item => ( item.phase) === "BEFORE").map((item) =>{
        const unixTime = parseInt(item.startTimeSeconds); 
        const date = new Date(unixTime * 1000);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const acceptance = item.verdict;


        console.log(item)
          return (
            <Card className='right mt-3' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.cs.usask.ca/images/news/2019/trophy-code.png" />
          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
            <Card.Text>
              {item.name}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.id}</ListGroup.Item>
            <ListGroup.Item>{parseInt(item.durationSeconds)/ (60 * 60 )} hour</ListGroup.Item>
            <ListGroup.Item>After { diffDays} days</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
          )
      })}
      
    </div>
  )
}

export default Contest