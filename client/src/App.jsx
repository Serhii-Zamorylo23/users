import User from "./components/user/user"
import Form from "./components/form/form"
const App=({users,reRenderDom})=>{
    return(
        <>
        <User users={users}/>
        <Form reRenderDom={reRenderDom} users={users}/>
        </>
    )
}
export default App