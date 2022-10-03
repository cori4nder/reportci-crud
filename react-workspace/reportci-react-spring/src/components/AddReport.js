import React, { useState } from 'react';

const AddReport = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [priority, setPriority] = useState('');

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
                    <button className="btn btn-primary"> Save </button>
                </div>
            </form>
        </div>
    );
}

export default AddReport;
