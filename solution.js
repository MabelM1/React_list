function Title(props){
        return (
            <div>
                <h1>Welcome to {props.name}</h1>
                <p>The best place to buy vehicles online</p>
            </div>

        ) 
    }

function Choice(){
  return (
    <div>
      <h1>Choose Options</h1>
      <label>New Only <input type="checkbox" /></label>
      <p>
      <form>Select Type &nbsp; 
        <select>
          <option> All</option>
          <option> Cars</option>
          <option> Trucks</option>
          <option> Convertibles</option>
        </select>
       </form>
      </p>
    </div>  
  )
}

function Vehicle(props){
  return (
   <div>
    <h1>{props.type}</h1>
   </div>
  )  
}

function VehicleList(props){
  return (
    <p>
      <table>
        <tr>
         <th>Year</th>
         <th>Model</th>
         <th>Price</th>
         <th>Buy</th>
       </tr>
       <tr>
         <td>{props.info[0]}</td>
         <td>{props.info[1]}</td>
         <td>{props.info[2]}</td>
         <td><button>Buy Now</button></td>
       </tr>
      </table>
    </p>
  )
  
}

function App(props){
  return (
  <div>
    <Title name = "React Transporation"/>
    <Choice/>
    <Vehicle type = "Cars"/>
    <VehicleList info = {["2013", "A","$32000"]}/>
    <VehicleList info = {["2011", "B","$4400"]}/>
    <VehicleList info = {["2013", "A","$15500"]}/>
    <Vehicle type = "Trucks"/>
    <VehicleList info = {["2014", "D","$18000"]}/>
    <VehicleList info = {["2013", "E","$5200"]}/>
    <Vehicle type = "Convertibles"/>
    <VehicleList info = {["2009", "F","$2000"]}/>
    <VehicleList info = {["2010", "G","$6000"]}/>
    <VehicleList info = {["2012", "H","$12500"]}/>
    <VehicleList info = {["2017", "M","$50000"]}/>
    </div>
      )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
