import * as React from 'react';

class ClickModal extends React.Component {
    public render() {
        return (
            
            <div className="modal fade all-text" id="clickModal" tabIndex={-1} role="dialog" aria-labelledby="clickModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="clickModalLabel">Lunch</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="date">Date: 9/10</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Time: 11am</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location: 238 Winter Ave</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info">Join Click</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ClickModal;