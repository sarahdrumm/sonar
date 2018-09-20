import * as React from 'react';

class Map extends React.Component {
    public render() {
        return (
            <div className="map">
                <div className="clearfix" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 listing-block">
                            <div className="media">
                                <div className="media-body pl-3">
                                    <div className="event">Lunch<small>12pm Jimmy John's</small></div>
                                    <div className="address">4062 Walnut Hill Drive, Seattle</div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body pl-3">
                                    <div className="event">Happy Hour<small>6pm Rhein Haus</small></div>
                                    <div className="address">4062 Walnut Hill Drive, Seattle</div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body pl-3">
                                    <div className="event">Golfing<small>3pm Fircrest Golf Club</small></div>
                                    <div className="address">4062 Walnut Hill Drive, Tacoma</div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body pl-3">
                                    <div className="event">Coffee<small>8am Starbucks</small></div>
                                    <div className="address">4062 Walnut Hill Drive, Seattle</div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body pl-3">
                                    <div className="event">Happy Hour<small>5pm Common Table</small></div>
                                    <div className="address">4062 Walnut Hill Drive, Seattle</div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body pl-3">
                                    <div className="event">Dinner<small>7pm Hopdaddy</small></div>
                                    <div className="address">4062 Walnut Hill Drive, Seattle</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 map-box mx-0 px-0">
                            <iframe width="100%" height="100%" scrolling="no" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;