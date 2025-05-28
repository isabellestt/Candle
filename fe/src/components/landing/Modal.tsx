import plusIcon from '../../assets/plus-icon.svg'
import chevron from '../../assets/chevron.svg';

interface ModalProps {
  img: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText: string;
  onClose: () => void;
}
export function Modal({
  img,
  title,
  description,
  ctaText,
  onClose
}: ModalProps) {
  return (
    // modal-container
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(10,24,53,0.85)] z-[999]">
      {/* modal */}
        <div className="w-[644px] h-auto bg-[#000e2b] rounded-[30px] p-12">
          {/* modal-top */}
          <div className="flex justify-end">
            <button 
              className="bg-transparent border-0 cursor-pointer p-0"
              onClick={onClose}
            >
              {/* close-modal-button */}
              <img
                className="transform rotate-45"
                src={plusIcon}
                alt="Close modal"
              />
            </button>
          </div>
          {/* modal-bottom */}
          <div className="flex flex-col justify-center items-center">
            {/* modal-img */}
            <div className="modal-img">
              {/* "./assets/protection-centre.svg" */}
              <img
                src={img}
                alt="woman who is a protection specialist centre calling looking hopeful"
              />
            </div>
            {/* modal-header */}
            <div className="text-[#f6ddad] text-[40.45px] font-normal tracking-[-1.5px] leading-[44.8px] mb-3 text-center">
              {title}
            </div>
            {/* modal-subtext */}
            <div className="text-[#7a7e87] font-normal text-xs tracking-[-0.4px] leading-[18px] mb-6 text-center">
              {description}
            </div>
            {/* modal-cta */}
            <div className="flex items-center gap-1.5 cursor-pointer">
              {/* modal-cta-text */}
              <div className="text-[11.03px] tracking-[0.08px] leading-[16.3px] bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text">
                {ctaText}
              </div>
              {/* modal-cta-arrow */}
              <div className="h-[14px]">
                <img src={chevron} alt="arrow pointing right" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}