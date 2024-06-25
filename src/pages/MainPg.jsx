import VideoAtm from "../components/atom/VideoAtm";
import ImgAtm from "../components/atom/ImgAtm";

import ImgFrame from "../assets/images/yellowFrame.png";

import videoData from "../assets/data/video.json";

import animalVideo from "../assets/video/animal.mp4";
import historyVideo from "../assets/video/history.mp4";
import environmentVideo from "../assets/video/environment.mp4";
import scienceVideo from "../assets/video/science.mp4";
import travelVideo from "../assets/video/travel.mp4";

const MainPg = () => {
  const videoJson = videoData;
  console.log(videoJson);

  //   const videoLists = [
  //     { title: "animal", video: animalVideo },
  //     { title: "history", video: historyVideo },
  //     { title: "environment", video: environmentVideo },
  //     { title: "science", video: scienceVideo },
  //     { title: "travel", video: travelVideo },
  //   ];

  const videoLists = videoJson.data;

  // 0 ~ 4까지의 데이터를 랜덤하게 추출 (랜덤 방식 추출)
  const random = Math.floor(Math.random() * 5);

  const selectVideo = (val) => {
    switch (val) {
      case "animal":
        return animalVideo;
      case "history":
        return historyVideo;
      case "environment":
        return environmentVideo;
      case "science":
        return scienceVideo;
      case "travel":
        return travelVideo;
      default:
        return null;
    }
  };

  return (
    <section id="main" className="position-relative">
      <VideoAtm srcProp={selectVideo(videoLists[random].title)} />
      <div className="video_dark"></div>
      <div className="wrap">
        <div className="main_cont">
          <div className="content">
            <ImgAtm srcProp={ImgFrame} altProp="National Geographic 마크" />
            <h2>{videoLists[random].title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainPg;
