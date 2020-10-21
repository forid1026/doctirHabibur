import React from 'react';
import { Card } from 'react-bootstrap';
import './Team.css';
const Team = () => {
    return (
            <div className="team">
                <div className="wrapper">
                    <div className="container">
                        <div className="section-title team-t">
                            <h2>টিম</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="image-gallery">
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src="https://i.ibb.co/Lr6t7s9/team1-2dc460fc.jpg" />

                                </Card>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="image-gallery">
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src="https://i.ibb.co/ysJv9SL/team2-fc47ffb7.jpg" />

                                </Card>
                                </div>
                            </div>
                            <div className="col-md-4">
                               <div className="image-gallery">
                               <Card className="card" style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src="https://i.ibb.co/rxndkWR/team3-5020cf7a.jpg" />

                                </Card>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            

    );
};

export default Team;
