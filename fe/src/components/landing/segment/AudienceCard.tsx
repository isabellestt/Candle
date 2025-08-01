import plusIcon from '../../../assets/plus-icon.svg'
import { useState } from 'react'
import { Modal } from './Modal'
import './Segment.css'

interface AudienceCardProps {
  img: string;
  title: string;
  modalImg: string;
  modalTitle: React.ReactNode;
  modalDescription: React.ReactNode;
  modalCtaText: string;
} 
export function AudienceCard({
  img,
  title,
  modalImg,
  modalTitle,
  modalDescription,
  modalCtaText
}: AudienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; 
  };
  return (
    <div>

      <div className="segment-card segment-card-one">
        <img
          className="segment-img"
          src={img}
          alt="woman who is a victim looks sad calling in the dark"
        />
        <div className="card-bottom-wrapper">
          {/* For Victims of Abuse */}
          <div className="segment-card-subtext">{title}</div>
          <button className=' segment-button'
            onClick={openModal}
          >
            <img
              className="expand-icon"
              src={plusIcon}
              alt="expand icon"
            />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          img={modalImg}
          title={modalTitle}
          description={modalDescription}
          ctaText={modalCtaText}
          onClose={closeModal}
        />
      )}
      
    </div>
  )
}