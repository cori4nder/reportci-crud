import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import reportService from '../services/report.service';

const AddReport = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [priority, setPriority] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    const saveReport = (e) => {
        e.preventDefault();

        const report = { title, description, place, priority, id };

        if (id) {
            reportService.update(report)
                .then(response => {
                    console.log('Report updated successfully', response.data);
                    history('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            reportService.create(report)
                .then(response => {
                    console.log('Report created successfully', response.data);
                    history('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            reportService.get(id)
                .then(report => {
                    setTitle(report.data.title);
                    setDescription(report.data.description);
                    setPlace(report.data.place);
                    setPriority(report.data.priority);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return (
        <div className="container">
            <h3>Add New Report</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Enter Title"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Enter Description"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="place"
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                        placeholder="Enter Place"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="priority"
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                        placeholder="Enter Priority"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveReport(e)}> Save </button>
                </div>
            </form>
            <hr />
            <Link to="/"> Back to Reports </Link>
        </div>
    );
}

export default AddReport;
