import * as React from 'react';

class ProfileModal extends React.Component {
    public render() {
        return (

            <div className="modal fade all-text" id="profileModal" tabIndex={-1} role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="fa fa-pencil fa-2x btn btn-info" />
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="picWrapper">
                                    <img src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"
                                        alt="Cat" className="profilePic" />
                                </div>
                                <div className="textWrapper">
                                    <h1 className="name">John Doe</h1>
                                    <p className="place">Seattle</p>
                                    <br/>
                                    <a className="symbol" href="#"><i className="fa fa-twitter" /></a>
                                    <a className="symbol" href="#"><i className="fa fa-linkedin" /></a>
                                    <a className="symbol" href="#"><i className="fa fa-facebook" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProfileModal;