import React from 'react'
import useFetchApi from './useFetchApi';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Contest from './Contest';

const problemTags =   {
    BRUTE_FORCE: "brute force",
    BINARY_SEARCH : "binary search",
    DATA_STRUCTURE : "data structures",
    GRAPHS : "graphs",
    GREEDY :  "greedy",
    IMPLEMENTATION : "implementation",
    TWO_POINTERS : "two pointers",
    TERNARY_SEARCH : "ternary search",
    TREES : "trees",
    SORTINGS : "sortings",
    SHORTEST_PATHS : "shortest paths",
    SCHEDULES : "schedules",
    PROBABLITIES : "probabilities",
    NUMBER_THEORY : "number theory",
    MEET_IN_THE_MIDDLE : "meet-in-the-middle",
    MATRICS : "matrices",
    INTERACTIVE : "interactive",
    HASHING : "hashing",
    GRAPH_MATHINGS : "graph matchings",
    GEOMETRY : "geometry",
    GAMES : "games",
    FLOWS : "flows",
    EXPRESSION_PARSING : "expression parsing",
    DP : "dp",
    CHINISE_REMAINDER_THEOREM: "chinese remainder theorem",
    COMBINATORICS: "combinatorics",
    DFS_AND_SIMILAR : "dfs and similar",
    DIVIDE_AND_CONQUER : "divide and conquer",
    BIT_MASKS : "bitmasks",
    CONSTRAUCTIVE_ALGORITHEMSS : "constructive algorithms"
  }

    
const BASE_URL = `https://codeforces.com/api/problemset.problems?tags=combinatorics`;

function ProblemSet() {
  const {data, isLoading, error} = useFetchApi(BASE_URL)

  if (isLoading){
    return <div>loading...</div>
  }

  if (error){
    return 
  } 

  if (data == null){
    return
  }
console.log(data)
  return (
    <div className='problem-tags-container'>
      <div className='left-side-bar'>
      <div className='btn' style={{display: 'flex', justifyContent: "space-between"}}>
      
      <Button variant="outline-success" size="lg" className='mt-3'>
        Solved problems
      </Button>
      

      <Button variant="outline-info" size="lg" className='mt-3 mr-2'>
        All problem
      </Button>
      </div>
        <hr/>
        <div className='problem-tags '>
            {
              Object.keys(problemTags).map((item) =>{
                return <div className='problem-tag'>
                  <Button variant="outline-info" size='sm'>{problemTags[item]}</Button>
                </div>
              })
            }
      </div>
      <div className='mt-5'>
      <ListGroup>
        <div className='mb-3 problem-catagory'>
          <DropdownButton variant='light' id="dropdown-basic-button" title="Difficulty" className='mr-2'>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton variant='light' id="dropdown-basic-button" title="Tags" className='ml-2'>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton variant='light' id="dropdown-basic-button" title="Status" className='ml-2'>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <Button variant="light" size="md">
          random
      </Button>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        {data.result.problems.map((item) => {
          return (
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{item.name}</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item><span>difficulty - </span><span className='text-muted'>{item.rating}</span></ListGroup.Item>
          <ListGroup.Item><span>Index - </span><span className='text-muted' >{item.index}</span></ListGroup.Item>
          <ListGroup.Item><span>Related topics: </span>{item.tags.map(item => <span className='text-muted'> {item}</span>)}</ListGroup.Item>
          <ListGroup.Item><span>contest Id - </span><span className='text-muted'>{item.contestId}</span></ListGroup.Item>
          <ListGroup.Item><span>Type - </span><span className='text-muted'>{item.type}</span></ListGroup.Item>
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          )
        })}
      
      </ListGroup>
      </div>
      <div>
        
      </div>
      </div>
      <div>
          <Contest />
      </div>
    </div>    
  )
    
} 

export default ProblemSet