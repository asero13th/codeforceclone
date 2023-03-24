import React from 'react'
import useFetchApi from './useFetchApi';
import SimplifiedData from './SimplifiedData';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const SUBMISSION_INFO = "https://codeforces.com/api/user.status?handle=aserhailu2020&from=1";


function UserStatus() {
  
  const {data, isLoading, error} = useFetchApi(SUBMISSION_INFO);

  if (isLoading){
    return <div>Loading...</div>
  }
  if (error){
    return <div><h3>Error</h3> {error}</div>
  }

  if (data == null){
    return
  }

  return (
    <div className='profile-right-side-bar'>
        <Card style={{ width: '30rem' }}>
        <Card.Header> Last submmisions</Card.Header>
        {data.result.map((item) =>{
             const unixTime = parseInt(item.creationTimeSeconds); 
             const date = new Date(unixTime * 1000);
             const now = new Date();
             const diffTime = Math.abs(now - date);
             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const acceptance = item.verdict;
            

            return(
                <ListGroup variant="flush" className='mt-2'>
                    <ListGroup.Item style={{display :'flex', justifyContent:'space-between'}}>
                            <span style={{color:"#000000eE3", fontSize:"14px"}}>{item.problem.index}. {item.problem.name}</span>
                            {acceptance === "OK" ? <span style={{color: acceptance === 'OK'? 'green': 'red', fontSize:"14px"}}>Accepted</span>:<span style={{color: acceptance === 'OK'? 'green': 'red',fontSize:"14px"}}>Wrong answer</span>}
                            <span style={{color:"#00000099", fontSize:"12px"}}>{diffDays} days ago</span>
                    </ListGroup.Item>
                </ListGroup>
            )
        })}

        </Card>
        <div>
            <SimplifiedData data={data.result} />
        </div>
    </div>
  )
}

export default UserStatus