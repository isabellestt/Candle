import plusIcon from '../../assets/plus-icon.svg'
import chevron from '../../assets/chevron.svg';
import '../../App.css'

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
    <div className="modal-container">
      {/* modal */}
        <div className="modal">
          {/* modal-top */}
          <div className="modal-top">
            <button 
              className="border-0 cursor-pointer p-0"
              onClick={onClose}
            >
              {/* close-modal-button */}
              <img
                className="close-modal-button"
                src={plusIcon}
                alt="Close modal"
              />
            </button>
          </div>
          {/* modal-bottom */}
          <div className="modal-bottom">
            {/* modal-img */}
            <div className="modal-img">
              {/* "./assets/protection-centre.svg" */}
              <img
                src={img}
                alt="woman who is a protection specialist centre calling looking hopeful"
              />
            </div>
            {/* modal-header */}
            <div className="modal-header">
              {title}
            </div>
            {/* modal-subtext */}
            <div className="modal-subtext">
              {description}
            </div>
            {/* modal-cta */}
            <div className="modal-cta">
              {/* modal-cta-text */}
              <div className="modal-cta-text">
                {ctaText}
              </div>
              {/* modal-cta-arrow */}
              <div className="modal-cta-arrow">
                <img src={chevron} alt="arrow pointing right" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}