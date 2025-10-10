import React from 'react'
import "../style/BestVitthal.css"
import "../style/Policyacc.css"
import PolicyAccountabilitySection from './PolicyAccountabilitySection'
const Policyacc = () => {
  return (
    <div className='policyacc'>
    <div className="best-vitthal-container">
      <header className="page-header">
        <h1 className="main-title"> Policy & Accountability Engagement </h1>
      </header>
    <section className="description-section">
        <div className="description-content">
          <p className="description-intro">
            Opposed the privatization of BEST operations, raising concerns over the outsourcing model including contractor-managed buses, maintenance quality, and lack of job security for staff. 
          </p>
          
          <p className="description-conclusion">
           Conducted regular meetings with BEST route managers to raise commuter issues and push for timely solutions. 
          </p>
        </div>
      </section>
      </div>
      <PolicyAccountabilitySection/>
      </div>
  )
}

export default Policyacc;
