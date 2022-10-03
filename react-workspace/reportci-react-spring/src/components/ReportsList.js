import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportService from '../services/report.service';
import { Link } from "react-router-dom";

const ReportsList = () => {

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
            <hr />
            <div>
                <Link to="/add" className="btn btn-primary mb-2">Add Report</Link>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Place</th>
                            <th>Priority</th>
                            <th>Actions</th>
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
                                    <td>
                                        <Link className="btn btn-info" to={`/reports/edit/${report.id}`}>Update</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ReportsList;
