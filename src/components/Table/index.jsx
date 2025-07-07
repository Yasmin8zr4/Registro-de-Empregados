import Add from "../Buttons/Add"
import Buttons from "../Buttons/Edit"
import "./styles.css"

function Table(){
    return(
        <div className="total">
            <Add/>
            <table class="table table-bordered">

              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Department</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <th scope="row">1</th>
                  <td>Rakesh</td>
                  <td>2345</td>
                  <td>IT</td>
                  <Buttons/>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>Priyanka</td>
                  <td>2500</td>
                  <td>HR</td>
                  <Buttons/>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>Anurag</td>
                  <td>4500</td>
                  <td>Sales</td>
                  <Buttons/>
                </tr>

              </tbody>
            </table>
        </div>
    )
}

export default Table