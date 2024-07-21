const Form =({users,reRenderDom})=>{
  const candidateInfo={
    name:"",
    phone:""
  };
  const handleUpdateForm=({type,newValue})=>{
    candidateInfo[type]=newValue
  };
  const handleAddUser=()=>{
    reRenderDom([
      ...users,
      {
        ...candidateInfo
      }
    ])
  }
  return(
    <div className="container">
      <input
       onChange={(e)=>handleUpdateForm("name",e.target.value)}
       type="text"
       placeholder="write name"
      ></input>
      <input
       onChange={(e)=>handleUpdateForm("phone",e.target.value)}
       type="text"
       placeholder="write phone"
      ></input>
      <button onClick={handleAddUser}>Create user</button>
    </div>
  )
}
export default Form