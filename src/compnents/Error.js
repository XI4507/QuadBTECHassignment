import { useRouteError } from "react-router-dom"

const Error = () => {
  const err=useRouteError();
  return (
    <div>
       <h1>Oops looks like you are on wrong URL</h1>
       <br />
       <h4>{err.status} : {err.statusText}</h4>
    </div>
  )
}

export default Error
