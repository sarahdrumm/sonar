import * as React from 'react';

class Map extends React.Component {
    public render() {
        return (
            <div className="map">
                <div className="clearfix" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 listing-block">
                            <div className="media">
                                <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Lunch<small>11am Starbucks</small></div>
                                            <div className="address">238 Winter Ave</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.10</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Dinner<small>6pm CrushCraft</small></div>
                                            <div className="address">278 Jefferson Ln</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.10</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Happy Hour<small>5:30pm Common Table</small></div>
                                            <div className="address">28 Hop Rd</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.11</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Lunch<small>12pm Hopdaddy</small></div>
                                            <div className="address">937 Adventure Ave</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.12</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Lunch<small>12pm Jimmy John's</small></div>
                                            <div className="address">777 Sandwich Pl</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.14</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Paintball<small>2pm PaintPlace</small></div>
                                            <div className="address">3232 Paint Pl</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.14</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Drinks<small>7pm Rien Haus</small></div>
                                            <div className="address">42 Wallaby Way</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.15</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="media">
                            <button type="button" className="media-body pl-3 btn" data-toggle="modal" data-target="#clickModal">
                                    <div className="row">
                                        <div className="col col-sm-0">
                                            <div className="event">Golfing<small>9:30am Fircrest</small></div>
                                            <div className="address">718 Tree Ln</div>
                                        </div>
                                        <div className="col col-sm-3 media-right">
                                                <div className="date">9.15</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-8 map-box mx-0 px-0">
                            <iframe width="100%" height="100%" scrolling="no" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Map;