import * as React from 'react';

class ClickModal extends React.Component {
    public render() {
        return (

            <div className="modal fade all-text" id="clickModal" tabIndex={-1} role="dialog" aria-labelledby="clickModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="clickModalLabel">Lunch</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="click">
                                <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Lunch</div>
                                            <div className="event"><small>We're grabbing lunch at Starbucks, come join us!</small></div>
                                            <div className="event"><small>11am Starbucks</small></div>
                                            <div className="address">238 Winter Ave, Sacramento CA</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                            <div className="date">9.10</div>
                                        </div>
                                    </div>
                                </button>
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