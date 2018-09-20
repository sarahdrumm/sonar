import * as React from 'react';

class AddClickModal extends React.Component {
    public render() {
        return (

            <div className="modal fade" id="addClickModal" tabIndex={-1} role="dialog" aria-labelledby="addClickModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addClickModalLabel">Add Click</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="info">Info:</label>
                                <input type="text" className="form-control" id="info" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date:</label>
                                <input type="date" className="form-control" id="date" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Time:</label>
                                <input type="time" className="form-control" id="time" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <input type="text" className="form-control" id="location" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-info">Create Click</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddClickModal;