import React from 'react'

function SolvedProblemTags(props) {

    var problemArray = []
    function countOccurrences(arr) {
        const counts = {};
        for (let i = 0; i < arr.length; i++) {
          const num = arr[i];
          counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        return counts;
      }

    for (let data of props.data){
        for (let tag of data.problem.tags){
            problemArray = problemArray.concat(tag)
        }
    }
    
    const problems = countOccurrences(problemArray)
    const problemsarray = Object.keys(problems)
    console.log(problemsarray)
    console.log(problems)
  return (
    <div>
        {problemsarray.map((tag) =>{
            return <li className='problem-tag'>{tag} - {problems[tag]}</li>
        })}
    </div>
  )
}

export default SolvedProblemTags