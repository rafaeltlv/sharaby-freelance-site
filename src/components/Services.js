import React from 'react'
import '../services.css'; // Update the file path if needed

const Services = () =>{
    return(
      <section className='Services'>
        <div className='Services'>
          <div className="container">
            <h2 className="text-center mb-5">Our Services</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4">
                      <img src="campaign_management.jpeg" alt="Service 2" className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title">Campaign Management</h3>
                        <p className="card-text">We manage and optimize your digital advertising campaigns to achieve maximum results</p>
                        <button className="btn btn-primary">Learn More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-4">
                      <img src="social_media_adv.jpeg" alt="Service 3" className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title">Social Media Advertising</h3>
                        <p className="card-text">We create and manage social media advertising campaigns to reach your target audience</p>
                        <button className="btn btn-primary">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4">
                      <img src="growth_strategy.jpeg" alt="Service 4" className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title">Growth Strategy</h3>
                        <p className="card-text">We optimize your marketing efforts for rapid growth and increased ROI.</p>
                        <button className="btn btn-primary">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    );
};

export default Services;