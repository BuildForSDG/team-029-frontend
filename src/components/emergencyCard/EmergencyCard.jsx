import React from 'react';
import { Card } from 'semantic-ui-react';


const EmergecyCard = () => {
  return (
    <Card className="alert" fluid color='red'>
      <h4><span className="key">Victims Address: </span>3 Aweoniye st, Dopemu, lagos Nigeria</h4>
      <h4><span className="key">Victims Description: </span>Robbery Scene</h4>
      <div className="extras">
        <h4><span className="key">Date: </span>{new Date("2020-06-09T04:35:58.216Z").toLocaleDateString()}</h4>
        <h4><span className="key"><span className="bar">|</span> Status: </span>Pending</h4>
        <h4><span className="key"><span className="bar">|</span> Assigned to: </span>USR-0964C</h4>
      </div>
      <div className="extras">
        <h4><span className="key">Victims Phone: </span>+2348101967324</h4>
        <h4><span className="key"><span className="bar">|</span> Severity: </span>Moderate</h4>
        <h4><span className="key"><span className="bar">|</span> Location Coodinate: </span>3.30747, 6.61251</h4>
      </div>
    </Card>
  )
}

export default EmergecyCard;