import React from 'react';
import { Card } from 'semantic-ui-react';


const EmergecyCard = ({ report }) => {
  const { address, description, place_id, severity, victim_phone_number, warden_user_id } = report;
  return (
    <Card className="alert" fluid color='red'>
      <h4><span className="key">Victims Address: </span>{address}</h4>
      <h4><span className="key">Victims Description: </span>{description}</h4>
      <div className="extras">
        <h4><span className="key">Date: </span>{new Date("2020-06-09T04:35:58.216Z").toLocaleDateString()}</h4>
        <h4><span className="key"><span className="bar">|</span> Status: </span>Pending</h4>
        <h4><span className="key"><span className="bar">|</span> Assigned to: </span>{warden_user_id}</h4>
      </div>
      <div className="extras">
        <h4><span className="key">Victims Phone: </span>{victim_phone_number}</h4>
        <h4><span className="key"><span className="bar">|</span> Severity: </span>{severity}</h4>
        <h4><span className="key"><span className="bar">|</span> Place Id: </span>{place_id}</h4>
      </div>
    </Card>
  )
}

export default EmergecyCard;