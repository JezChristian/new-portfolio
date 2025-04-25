import Web_BJMP from "./Web_BJMP.png";
import CastherAd from "./Multimedia/CastherAd.mp4";
import CastherImage from "./Multimedia/CastherImage.png";
import BJMP from "./Multimedia/BJMP.mp4";
import BJMPFeatures from "./Multimedia/BJMPFeatures.mp4";
import BlobMesh from "./3D/Videos/BlobMesh.mp4";
import BorderVideo from "./3D/Videos/BorderVideo.mp4";
import DonutBorder from "./3D/Videos/DonutBorder.mp4";
import FullMesh from "./3D/Videos/FullMesh.mp4";
import SideBorder from "./3D/Videos/SideBorder.mp4";
import SphereMesh from "./3D/Videos/SphereMesh.mp4";
import TiltSideBorder from "./3D/Videos/TiltSideBorder.mp4";
import Timepiece from "./3D/Videos/Timepiece.mp4";

export {
  Web_BJMP,
  BJMP,
  BJMPFeatures,
  CastherAd,
  CastherImage,
  BlobMesh,
  BorderVideo,
  DonutBorder,
  FullMesh,
  SideBorder,
  SphereMesh,
  TiltSideBorder,
  Timepiece,
};

export type MediaType = {
  id: number;
  label: string;
  src: string;
  type: string;
  thumbnail?: string;
  description?: string;
};

export const Web_Portfolio = [
  {
    id: 0,
    label: "BJMP Prison Management",
    src: Web_BJMP,
    type: "img",
  },
  {
    id: 1,
    label: "BJMP Prison Management 1",
    src: Web_BJMP,
    type: "img",
  },
];

export const MultiMedia: MediaType[] = [
  {
    id: 0,
    label: "Casther Location Temperature Checker Mobile Application",
    src: CastherAd,
    type: "vid",
    thumbnail: CastherImage,
    description:
      "Casther Location Temperature Checker Mobile Application is a sleek and intuitive app designed to provide real-time temperature readings for specific locations. Ideal for users who need accurate and localized temperature information, Casther allows easy navigation to check current conditions anywhere in the world. With a simple interface and precise data, the app ensures users can stay informed and plan activities based on accurate temperature insights, whether they're at home, traveling, or exploring new places.",
  },
  {
    id: 1,
    label: "BJMP Trailer",
    src: BJMP,
    type: "vid",
    thumbnail: Web_BJMP,
  },
  {
    id: 2,
    label: "BJMP Trailer",
    src: BJMPFeatures,
    type: "vid",
    thumbnail: Web_BJMP,
  },
  {
    id: 3,
    label: "3D Video Animation Output 1",
    src: BlobMesh,
    type: "vid",
  },
  {
    id: 4,
    label: "3D Video Animation Output 2",
    src: BorderVideo,
    type: "vid",
  },
  {
    id: 5,
    label: "3D Video Animation Output 3",
    src: DonutBorder,
    type: "vid",
  },
  {
    id: 6,
    label: "3D Video Animation Output 4",
    src: FullMesh,
    type: "vid",
  },
  {
    id: 7,
    label: "3D Video Animation Output 5",
    src: SideBorder,
    type: "vid",
  },
  {
    id: 8,
    label: "3D Video Animation Output 6",
    src: SphereMesh,
    type: "vid",
  },
  {
    id: 9,
    label: "3D Video Animation Output 7",
    src: TiltSideBorder,
    type: "vid",
  },
  {
    id: 10,
    label: "3D Video Animation Output 8",
    src: Timepiece,
    type: "vid",
  },
];
