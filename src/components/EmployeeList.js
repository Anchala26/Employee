import React, {useState, useEffect} from 'react'
import AddEmployee from './AddEmployee'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    // useEffect(() => {

    //     getAllEmployees();
    // }, [])

    // const getAllEmployees = () => {
    //     EmployeeService.getAllEmployees().then((response) => {
    //         setEmployees(response.data)
    //         console.log(response.data);
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    // }

    // const deleteEmployee = (employeeId) => {
    //    EmployeeService.deleteEmployee(employeeId).then((response) =>{
    //     getAllEmployees();

    //    }).catch(error =>{
    //        console.log(error);
    //    })
        
    // }
    

    return (
        
        <div className = "container">
           
        
            <button type="button" className="btn btn-primary mb-2 btn-sm float-end " onClick={AddEmployee}>Add Details</button>
            
            <table className="table table-bordered table-striped ">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee Department</th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Employee Email Id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.department}</td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button type="button" className="btn btn-primary mb-2 ">Edit</button>
                                    <button type="button" className="btn btn-danger mb-2 ">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent