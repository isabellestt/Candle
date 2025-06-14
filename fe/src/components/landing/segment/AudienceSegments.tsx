import { AudienceCard } from './AudienceCard';
import victimOfAbuseImg from '../../../assets/victim-of-abuse.svg';
import respondTeamImg from '../../../assets/respond-team.svg';
import protectionCentreImg from '../../../assets/protection-centre.svg';
import chevron from '../../../assets/chevron.svg';
import { Link } from 'react-router';
import './Segment.css'

export function AudienceSegments() {
  return (
    // second-wrapper
    <div className="second-wrapper" id='segment'>
      {/* second-wrapper-top */}
      <div className="second-wrapper-top">
        {/* second-subtext */}
        <div className="second-subtext">
          Candling is re-imagining how support is delivered in the moments
          that matter most. It combines voice AI with empathetic design to bridge after-hours gaps and enable faster, smarter, and more humane responses across the entire care network.
          <Link to="/demo" className="inline-block">
          {/* second-sub-cta */}
            <div className="second-sub-cta">
              {/* second-sub-cta-text */}
              <div className="second-sub-cta-text">
                Try our Demo
              </div>
              {/* second-sub-cta-arrow */}
              <img
                className="second-sub-cta-arrow"
                src={chevron}
                alt="chevron pointing right"
              />
            </div>
          </Link>
        </div>
        {/* second-header */}
        <div className="second-header">Built for Modern Crisis Response</div>
      </div>
      {/* second-wrapper-bottom */}
      <div className="second-wrapper-bottom">
        <AudienceCard
          img={victimOfAbuseImg}
          title="For Victims of Abuse"
          modalImg={victimOfAbuseImg}
          modalTitle={<>For Victims of Abuse</>}
          modalDescription={
            <>
              Even after hours, help is just a phone call away. Candling offers 24/7 access to a compassionate, listening voice, trained on Singapore's care network. Callers don’t need to know what to ask for as our agent listens patiently, responds with care, and gently helps them find the support they need.
            </>
          }
          modalCtaText="Learn how Candling comforts in crisis moments"
        />
        <AudienceCard 
          img={respondTeamImg}
          title="For Response Teams"
          modalImg={respondTeamImg}
          modalTitle={<>For First Responder <br /> Teams</>}
          modalDescription={
            <>
              Candling flags high-risk calls based on escalation-trigger keywords, automatically alerting duty officers through warm transfers. Whether it's a police officer, social worker, or helpline responder, support teams receive concise summaries of what was said, how the caller felt, and what follow-up is needed.
            </>
          }
          modalCtaText="See how Candling amplifies responder readiness"
        />
        <AudienceCard 
          img={protectionCentreImg}
          title="For Protection Centres"
          modalImg={protectionCentreImg}
          modalTitle={<>
            For Protection <br />
            Specialist Centres
          </>
          }
          modalDescription={
          <>
            Each overnight call generates a structured case summary, sent
            straight to the morning team’s dashboard. PSC counsellors can see which callers may need outreach, what services were discussed, and how distressed the caller sounded, all without breaching PDPA.
          </>
          }
          modalCtaText="Explore how Candling powers next-day continuity" 
        />
      </div>
    </div> 

  )
}