import React, { useState, useEffect } from 'react';
import { X, Bus, MapPin, Users, Star } from 'lucide-react';
import '../style/PopUpModal.css'; 

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        {/* Close button */}
        <button className="close-btn" onClick={closeModal}>
          <X size={20} />
        </button>

        {/* Left section - image fills area */}
        <div className="left-section">
          <img src="/bus-img3.jpeg" alt="Aapli BEST Logo" />
        </div>

        {/* Right section - content area */}
        <div className="right-section">
          <div className="content-section">
            <h2 className="modal-title">Welcome aboard!</h2>
            <p className="modal-description">
              Aapli BEST Aaplyachsathi is a non-political, non-profit organization. Information provided is for awareness purposes only.
            </p>
            <p className="modal-subtitle">Ready to start your journey?</p>
          </div>
          <button className="feedback-btn">
            FEEDBACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;