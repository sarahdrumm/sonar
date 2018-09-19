import * as React from 'react';

class Buttons extends React.Component {
    public render() {
      return (
        <div className="col-md-6 topButtons">
          <button type="button" className="fa fa-user fa-2x btn btn-info" data-toggle="modal" data-target="#profileModal"/>
          <button type="button" className="fa fa-search fa-2x btn btn-info"/>
          <button type="button" className="fa fa-plus fa-2x btn btn-info" data-toggle="modal" data-target="#addClickModal"/>
        </div>
      );
    }
  }
  
  export default Buttons;