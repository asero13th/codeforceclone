import React from 'react'
import useFetchApi from './useFetchApi';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';


const problemTags = 

  {
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
      <div className='container'>
        
        <div className='problem-tags mt-3'>
            {
              Object.keys(problemTags).map((item) =>{
                return <div className='problem-tag'>
                  <Button variant="outline-info" size='sm'>{problemTags[item]}</Button>
                </div>
              })
            }
      </div>
      <div className='right-sidebar mt-3'>
      <ListGroup>
        {data.result.problems.map((item) => {
          return (
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{item.name}</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item><span>difficulty - </span><span>{item.rating}</span></ListGroup.Item>
          <ListGroup.Item><span>Index - </span><span>{item.index}</span></ListGroup.Item>
          <ListGroup.Item><span>Related topics: </span>{item.tags.map(item => <span> {item}</span>)}</ListGroup.Item>
          <ListGroup.Item><span>contest Id - </span><span>{item.contestId}</span></ListGroup.Item>
          <ListGroup.Item><span>Type - </span><span>{item.type}</span></ListGroup.Item>
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          )
        })}
        
      </ListGroup>
      </div>
      </div>
    
  )
    
} 

export default ProblemSet