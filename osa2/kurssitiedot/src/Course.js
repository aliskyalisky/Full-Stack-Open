import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
  
  return (
    <div>
      <Header course={course.name} />
      <Content osat={course.parts}/>
      <Total osat={course.parts} />
    </div>
  )
}

export default Course