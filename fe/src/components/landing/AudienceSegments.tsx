import { AudienceCard } from './AudienceCard';
import victimOfAbuseImg from '../../assets/victim-of-abuse.svg';
import respondTeamImg from '../../assets/respond-team.svg';
import protectionCentreImg from '../../assets/protection-centre.svg';
import chevron from '../../assets/chevron.svg';
import { Link } from 'react-router';

export function AudienceSegments() {
  return (
    // second-wrapper
    <div className="px-12 pb-12 mt-24">
      {/* second-wrapper-top */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.7fr] gap-8 md:gap-0 p-6 md:p-24 text-center md:text-left">
        {/* second-subtext */}
        <div className="order-last md:order-first text-[#7a7e87] text-[clamp(1rem,2.2vw,1.2rem)] font-normal tracking-[-0.25px] leading-relaxed w-full md:w-[90%] max-w-[600px] mx-auto md:mx-0 mt-5 md:mt-0">
          Candling is re-imagining how support is delivered in the moments
          that matter most. It combines voice AI with empathetic design to bridge after-hours gaps and enable faster, smarter, and more humane responses across the entire care network.
          <Link to="/demo" className="inline-block">
          {/* second-sub-cta */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 mb-4 pb-4 cursor-pointer mt-6">
              {/* second-sub-cta-text */}
              <div className="bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text">
                Try our Demo
              </div>
              {/* second-sub-cta-arrow */}
              <img
                className="h-[14px]"
                src={chevron}
                alt="chevron pointing right"
              />
            </div>
          </Link>
        </div>
        {/* second-header */}
        <div className="text-[#f6ddad] text-[clamp(2rem,5vw,3.7rem)] font-normal tracking-[-1.5px] leading-tight order-first md:order-last">Built for Modern Crisis Response</div>
      </div>
      {/* second-wrapper-bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-6 md:px-24 pb-24">
        <AudienceCard
          img={victimOfAbuseImg}
          title="For Victims of Abuse"
          modalImg={victimOfAbuseImg}
          modalTitle={<>For Victims of Abuse</>}
          modalDescription={
            <>
              Even after hours, help is just a phone call away. <br />
              Candling offers 24/7 access to a compassionate, listening voice, built on memory-enhanced voice AI. <br />
              Callers don’t need to know what to ask for as our agent listens patiently, <br /> 
              responds with care, and gently helps them find the support they need.
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
              Candling flags high-risk calls based on tone and keywords, automatically<br />
              alerting duty officers. Whether it's a police officer, social worker, or DVERT<br />
              responder, support teams receive concise summaries of what was said,<br /> how the caller felt, and what follow-up is needed.
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
            straight to <br />
            the morning team’s dashboard. PSCs can see which callers may need
            <br />
            outreach, what services were discussed, and how distressed the
            caller
            <br />sounded, all without breaching PDPA.
          </>
          }
          modalCtaText="Explore how Candling powers next-day continuity" 
        />
      </div>
    </div> 

  )
}