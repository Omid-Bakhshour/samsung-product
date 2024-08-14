import { HeroSrcType } from '@/models/HeroSlider';
import React, { useEffect, useRef } from 'react';

type Props = {
  src: HeroSrcType;
  isPlaying: boolean;
  activeIndex: number;
  isActive: boolean;
};

function VideoSlide({
  src,
  isPlaying,
  activeIndex,
  isActive,
}: Props) {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopSrc = src.desktop;
  const mobileSrc = src.mobile;
  const isDesktopSrcValid = desktopSrc && desktopSrc.length > 0;
  const isMobileSrcValid = mobileSrc && mobileSrc.length > 0;

  useEffect(() => {
    if (isDesktopSrcValid && desktopVideoRef.current) {
      if (isPlaying && isActive) {
        desktopVideoRef.current.play();
      } else {
        desktopVideoRef.current.pause();
      }
    }

    if (isMobileSrcValid && mobileVideoRef.current) {
      if (isPlaying && isActive) {
        mobileVideoRef.current.play();
      } else {
        mobileVideoRef.current.pause();
      }
    }
  }, [isPlaying, isDesktopSrcValid, isMobileSrcValid, isActive]);

  useEffect(() => {
    if (isDesktopSrcValid && desktopVideoRef.current && !isActive) {
      desktopVideoRef.current.currentTime = 0;
    }

    if (isMobileSrcValid && mobileVideoRef.current && !isActive) {
      mobileVideoRef.current.currentTime = 0;
    }
  }, [activeIndex, isDesktopSrcValid, isMobileSrcValid, isActive]);

  return (
    <div className='w-full block h-full'>
      {isDesktopSrcValid && (
        <video
          ref={desktopVideoRef}
          className='w-full h-full hidden md:block'
          src={desktopSrc}
          muted
          autoPlay
          playsInline
        />
      )}

      {isMobileSrcValid && (
        <video
          ref={mobileVideoRef}
          className='w-full h-full block md:hidden'
          src={mobileSrc}
          muted
          autoPlay
          playsInline
        />
      )}
    </div>
  );
}

export default VideoSlide;
