import React, { useState } from 'react';
import './Spot.css';
import spotsData from '../../../spotsData';
import SpotModal from './modal/SpotModal';
import { useContext } from 'react';
import { BorecniceContext } from '../../../context/BorecniceContext';
import { AnimatePresence } from 'framer-motion';
import useWindowSize from "../../../hooks/UseWindowSize"

export interface SpotPictures {
  src: string;
  width: number;
  height: number;
}

const Spot: React.FC = () => {
  const [spotInfo, setSpotInfo] = useState({
    headline: '',
    text: '',
    pictures: [{ src: '', width: 0, height: 0 }],
  });

  const spotState = useContext(BorecniceContext);
  const windowWidth = useWindowSize().width

  console.log(windowWidth)

  const handleSpotOpen = (
    headline: string,
    text: string,
    pictures: SpotPictures[]
  ) => {
    setSpotInfo({ headline: headline, text: text, pictures: pictures });
    spotState.setSpotOpen(!spotState.spotOpen);
  };

  const Spots = spotsData.map((spot) => {
    const spotStyling: any = {
      maxWidth: '100px',
      maxHeight: '100px',
      width: '5vw',
      height: '5vw',
      borderRadius: '50%',
      position: 'relative',
      top: windowWidth > 460 ? spot.top : spot.topMobile,
      left: windowWidth > 460 ? spot.left : spot.leftMobile,
    };

    const img = require(`../../../files/img/spot_${spot.id}.png`);

    return (
      <div
        style={spotStyling}
        onClick={() => handleSpotOpen(spot.headline, spot.text, spot.pictures)}
      >
        <img className="spot__img" src={img} />
      </div>
    );
  });

  return (
    <>
      {Spots}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {spotState.spotOpen && <SpotModal spotInfo={spotInfo} />}
      </AnimatePresence>
    </>
  );
};

export default Spot;
