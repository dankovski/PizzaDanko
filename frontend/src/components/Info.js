import React from 'react';
import './styles/Info.css';

class Info extends React.Component {
    render () {
      return (

        <div className="info">

          <div className="info__div info__div--contact">
            <h3>Contact</h3>
            <div className="info__div__divider">
              <div className="info__div--left">
                <div>Phone number:</div>
                <div>&nbsp;</div>
                <div className="info__div--space">E-mail:</div>
                <div className="info__div--space">Address:</div>
              </div>

              <div className="info__div--right">
                <div>123456789</div>
                <div>123454321</div>
                <div className="info__div--space">pizzadanko@o2.com</div>
                <div className="info__div--space">12-345 Bydgoszcz</div>
                <div>Nazwa 4/7</div>
              </div>
            </div>
          </div>

          <div className="info__div info__div--hours">
            <h3>Opening hours</h3>
            <div className="info__div__divider">
              <div className="info__div--left">
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div>Sunday</div>
              </div>

              <div className="info__div--right">
                <div>10AM-22PM</div>
                <div>10AM-22PM</div>
                <div>10AM-22PM</div>
                <div>10AM-22PM</div>
                <div>10AM-23PM</div>
                <div>12AM-23PM</div>
                <div>12AM-23PM</div>
              </div>
            </div>
          </div>

          <div className="info__div info__div--payment">
            <h3>Possible payment</h3>
            <div>Cash</div>
            <div>BLIK</div>
            <div>Credit cards</div>
            <div>Mobile payment</div>

          </div>

       </div>
      );
    }
  }

  export default Info;