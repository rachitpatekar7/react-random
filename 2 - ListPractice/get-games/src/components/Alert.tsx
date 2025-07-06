import {ReactNode} from 'react'   
interface AlertProps {
    children:ReactNode;  // Define any props if needed
}


const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary">
      {children}
    </div>
  )
}

export default Alert