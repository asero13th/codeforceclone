import React from 'react'
import useFetchApi from './useFetchApi';
import UserStatus from './UserStatus';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const PERSONAL_INFO = "https://codeforces.com/api/user.info?handles=aserhailu2020"


function Profile() {

  const {data, isLoading, error} = useFetchApi(PERSONAL_INFO)
  if (isLoading){
    return <div><h3>Loading...</h3></div>
  }
  if (error){
    return <div><h3>Error</h3>{error}</div>
  }

  if (data == null){
    return 
  }
  console.log(data)
  const unixTime  = parseInt(data.result[0].lastOnlineTimeSeconds)
  const date = new Date(unixTime * 1000);
  const day = date.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <Container className='mt-2'>
      <Row>
        <Col sm={3} className="profile-div">
            <Card style={{ width: '18rem' }}>
                <Card.Header>user info</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className='profile-header'>
                    <img className='profile-pic' src = {data.result[0].titlePhoto} alt="codeforces profile pic"/>
                    <h5 className='codeforce-handle'>{data.result[0].handle}</h5>
                    <h6>Rating <Badge bg="secondary">{data.result[0].maxRank}</Badge></h6>
                    </ListGroup.Item>
                    <ListGroup.Item>handle: {data.result[0].handle}</ListGroup.Item>
                    <ListGroup.Item>maximum rating: {data.result[0].maxRating}</ListGroup.Item>
                    <ListGroup.Item>frind of count: {data.result[0].friendOfCount}</ListGroup.Item>
                    <ListGroup.Item>rank: {data.result[0].rank}</ListGroup.Item>
                    <ListGroup.Item>contribution: {data.result[0].contribution}</ListGroup.Item>
                    <ListGroup.Item>last seen: {day}</ListGroup.Item> 
                </ListGroup>
            </Card>
        </Col>

        <Col sm={9}>
            <UserStatus />
        </Col>
       
      </Row>
    </Container>  
  ) 
}
export default Profile