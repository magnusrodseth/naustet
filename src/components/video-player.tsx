import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  const username = "admin";
  const password = "silje1984";
  const cameraIp = "129.241.236.150";
  const rtspPort = 554;
  const streamUrl = `rtsp://${username}:${password}@${cameraIp}:${rtspPort}/cam/realmonitor?channel=1&subtype=0`;
  // const streamUrl = "rtsp://admin:silje1984@185.45.177.21:554/cam/realmonitor?channel=1&subtype=0";

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: streamUrl,
            type: "application/x-rtsp",
          },
        ],
      });

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, [streamUrl]);

  return (
    <div className="w-full h-full">
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoPlayer;
