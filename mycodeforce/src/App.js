import React,{useState} from "react";
import Header from "./components/Header";
import ProblemSet from './components/ProblemSet'
import useFetchApi from "./components/useFetchApi";
import Profile from "./components/Profile";

const BASE_URL = "https://codeforces.com/api/problemset.problems?tags=implementation"


function App() {


  const [problem, setProblem] = useState([])
  const [problemStatistics, setProblemstatistics] = useState([])
  const {data, isLoading, error} = useFetchApi(BASE_URL)
  

  if (isLoading){ 
    console.log("loading...")
    return <div><h3>Loading...</h3></div>
  }
  if (error){
    console.log("error...")
    return <div><h3>Error: {error}</h3></div>
  }

function sendProblemData(){
  setProblem(data.result.problems)
  }

  function sendProblemStaticsData(){
    setProblemstatistics(data.result.problemStatistics)
  }
  
  return ( 
    <div className="App">
      <Header />
      {/* <ProblemSet data={problem}  sendData = {sendProblemData}/> */}
      <Profile />
    </div>
  );
}
export default App;











// useEffect (() =>{

//   async function  fetchCodeForces(){
//     try{
//     const res = await axios.get("https://codeforces.com/api/problemset.problems?tags=implementation")
//     setData(res.data.result.problems)
//   } catch(e){
//     console.log(e)
//   }
// }

// fetchCodeForces();
// },[])