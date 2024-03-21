import React from 'react';
import { Button, Badge } from 'react-bootstrap';

export default function AboutHome() {
  return (
    <div>
      <div className="d-flex justify-content-start align-items-center" style={{ marginLeft: '90px', marginTop: '30px' }}>
        <img
          src="https://cdn.dribbble.com/userupload/12006022/file/original-8cff586424e89d336c38e6b381322826.jpg?resize=400x0"
          alt="Sample"
          style={{ width: '700px', height: '500px', marginRight: '20px' }}
        />
        <div style={{ marginLeft: '50px' }}>
          <p style={{ fontSize: '18px' }}>DECENTRALIZED, KYC</p>
          <p style={{ fontSize: '28px', color: 'black' }}><b>Cryptocurrency Crowdfunding</b></p>
          <p style={{ fontSize: '28px' }}><b>& Donations</b></p>

          <Button variant="success" style={{ backgroundColor: 'blue', borderColor: 'green', marginTop: '10px' }}>
            Get Started
          </Button>
        </div>
      </div>

      <div className="d-flex" style={{ background: '#e8dfdf', padding: '20px', borderRadius: '10px', width: '1000px', marginLeft: '250px', marginTop: '60px' }}>
        <div>
          <p style={{ fontSize: '26px', marginLeft: '60px', marginTop: '60px' }}><b>Get <u style={{ color: 'blue' }}>Crowdfunding</u></b></p>
          <p style={{ fontSize: '26px', marginLeft: '60px' }}>  <b>or accept<u style={{ color: 'blue' }}> donations</u></b></p>
          <p style={{ fontSize: '26px', marginLeft: '60px' }}><b> in cryptocurrency</b></p>
          <p style={{ fontSize: '16px', marginLeft: '60px' }}>It only takes a few minutes...</p>

          <ul className="list-unstyled" style={{ fontSize: '20px', paddingInlineStart: '20px', marginTop: '30px' }}>
            <li style={{ marginBottom: '10px' }}><Badge pill variant="primary" style={{ fontSize: '20px' }}>1 </Badge> <span/> Visit the app</li>
            <li style={{ marginBottom: '10px' }}><Badge pill variant="primary" style={{ fontSize: '20px' }}>2 </Badge>  Create a new Project</li>
            <li style={{ marginBottom: '10px' }}><Badge pill variant="primary" style={{ fontSize: '20px' }}>3 </Badge>  Start a campaign</li>
          </ul>
          <p>Try Now
            <img
              src="right.png"
              style={{ marginLeft: '5px', width: '30px', height: '10px' }}
            />
          </p>
        </div>

        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/crowdfunding-6262895-5253322.png"  // Replace with the actual URL of the additional image
            alt="Additional"
            style={{ marginLeft: '50px', width: '550px', height: '500px' }}
          />
</div></div>


<div style={{ background: '#3446F6', padding: '20px', borderRadius: '10px', marginTop: '50px', marginLeft: '190px', marginRight: '190px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="d-flex justify-content-start align-items-center" style={{ marginLeft: '90px', marginTop: '30px' }}>
          <img
            src="https://i.pinimg.com/474x/8a/59/a6/8a59a63309a33b36bf2bd882bbf256f3.jpg"
            alt="addimg"
            style={{ width: '400px', height: '400px', borderRadius: '10px', marginLeft: '-500px',marginBottom:'20px'  }}
          />
          
          <div style={{ flex: 1, marginLeft: '60px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <h3 style={{ color: 'white' }}><b>Apps Coming Soon</b></h3>
            <p style={{ color: 'white' }}><b>Decentralized crowdfunding, donations, and exchange</b></p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', height:'75px'}}>
              <Button variant="dark" style={{ width: '150px' }}>
                <img src="apple.png" style={{ width: '20px',marginRight: '10px' }} />
                Download on  App Store
              </Button>
            
  
        <div style={{ display: 'flex', justifyContent: 'center', height:'75px',marginLeft:'10px' }}>
          <Button variant="dark" style={{ width: '150px' }}>
            <img src="game.png" style={{ width: '20px',marginRight: '10px' }} />
            Download on  Google Play Store
          </Button>
        </div></div>
      </div>
    </div></div></div>
  );
}