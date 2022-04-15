import React, { useCallback, useContext, useState } from 'react';
import './SpotModal.css';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { SpotPictures } from '../Spot';
import { BorecniceContext } from '../../../../context/BorecniceContext';
import { AnimatePresence, motion } from 'framer-motion';
import SpotBackDrop from './SpotBackDrop';

interface SpotInfoProps {
  spotInfo: SpotInfoObject;
}

interface SpotInfoObject {
  headline: string;
  text: string;
  pictures: SpotPictures[];
}

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      dutarion: 0.1,
      type: 'spring',
      damping: 25,
      stifness: 500,
    },
  },
  exit: {
    y: '100vh',
  },
};

const SpotModal: React.FC<SpotInfoProps> = ({ spotInfo }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const spotState = useContext(BorecniceContext);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <SpotBackDrop onClick={() => spotState.setSpotOpen(false)}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="spot__info"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <div className="spot__text__container">
              <h2>{spotInfo.headline}</h2>
              <p>{spotInfo.text}</p>
              <Gallery photos={spotInfo.pictures} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={spotInfo.pictures.map((x: any) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
              <div
                className="spot__button"
                onClick={() => spotState.setSpotOpen(false)}
              >
                X
              </div>
            </div>
        </motion.div>
      </SpotBackDrop>
    </>
  );
};

export default SpotModal;
