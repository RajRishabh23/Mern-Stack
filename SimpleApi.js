// import React from "react";

// class SimpleApi extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     this.state={
//       results:[]
//     }
//   }

//   HandleApiCalls=(e)=>{
//     e.preventDefault();

//     fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
//     .then((response)=>this.setState({results:response})).catch(err=>console.log(err));
//   }


//   render()
//   {
//     return(
//       <> 
//       <button onClick={(e)=>this.HandleApiCalls(e)}>Click me</button>

//       {
//         this.state.results.map((item)=>(
//           <>
//           <h2>{item.name}</h2>
//           <p>{item.username}</p>
//           </>
//         ))
//       }
      
//       </>
//     )
//   }
// }

// export default SimpleApi;