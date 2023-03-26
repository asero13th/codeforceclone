import React from 'react'
import useFetchApi from './useFetchApi';




const problemTags = 
    {
  BRUTE_FORCE : "brute force",
  BINARY_SEARCH : "binary search",
  DATA_STRUCTURES : "data structures",
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
  DIVIDE_AND_CONQUER : "divide and conquer",
  DP : "dp"
  
}
const BASE_URL = "https://codeforces.com/api/problemset.problems?tags=implementation";

function ProblemSet() {
  const {data, isLoading, error} = useFetchApi(BASE_URL)

  if (isLoading){
    return <div>loading...</div>
  }

  if (error){
    return 
  } 


  console.log(data)

  return (
    data.result.problems.map((item) =>{
        return <li>{item.name} - type : {item.type} - rating : {item.rating}</li>
    })
    
  )
}

export default ProblemSet