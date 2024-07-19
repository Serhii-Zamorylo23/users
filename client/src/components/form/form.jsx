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
      onChange={(e)=>handleUpdateForm(name)}
      />
    </div>
  )
}
export default Form