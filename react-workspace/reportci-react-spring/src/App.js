import React, { useEffect, useState } from 'react';
import reportService from "./services/report.service";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    reportService.getAll()
      .then(response => {
        console.log('Printing the report data', response.data);
        setReports(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, [])

  return (
    <div className="container">
      <h3>List of Reports</h3>
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Place</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {
              reports.map(report => (
                <tr key={report.id}>
                  <td>{report.title}</td>
                  <td>{report.description}</td>
                  <td>{report.place}</td>
                  <td>{report.priority}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
