import React from "react";
import { Table } from "reactstrap";
import "./admin.css";

const Admin = ({ data }) => {
  return (
    <div className="table-responsive">
      <h1 className="text-center m-4">
        <b>Registered Users Info</b>
      </h1>
      <Table striped>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>User Name</th>
            <th>Email ID</th>
            <th>College Name</th>
            <th>Mobile Number</th>
            <th>User Registered</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => ( */}
          <tr>
            {/* <td>{index + 1}</td>
              <td>{item.userName}+2</td>
              <td>{item.email} + 3</td>
              <td>{item.collegeName}+ 3</td>
              <td>{item.mobileNumber}+ 3</td>
              <td>{item.userRegistered ? "Yes" : "No"}</td>
              <td>1</td> */}
            <td>01</td>
            <td>userName+2</td>
            <td>email + 3</td>
            <td>collegeName+ 3</td>
            <td>mobileNumber+ 3</td>
            <td>userRegistered ? "Yes" : "No"</td>
          </tr>
          {/* ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
