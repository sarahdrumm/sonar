import * as React from 'react';

class ProfileModal extends React.Component {
    public render() {
        return (

            <div className="modal fade" id="profileModal" tabIndex={-1} role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="fa fa-pencil fa-2x btn btn-info" />
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body">
                                <div className="card">
                                    <img src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"
                                        alt="Cat" className="profilePic" />
                                    <h1>John Doe</h1>
                                    <p className="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-linkedin" /></a>
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#">Change Username or Password</a>
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