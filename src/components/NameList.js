const NameList = () => {

const names = ['Bruce', 'Clark', 'Diana', 'Wade']

  return (
    <div>
       {
       names.map((name) => {
            return <h2 key={name}>
                {name} 
                </h2>
       })
       } 
    </div>
  )
}

export default NameList