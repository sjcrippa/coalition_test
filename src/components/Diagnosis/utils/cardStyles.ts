import respiratoryRate from "/public/respiratoryRate.png";
import heartBpm from "/public/heartBpm.png";
import temperature from "/public/temperature.png";
import { StaticImageData } from "next/image";

export type DiagnosisKey = "respiratory_rate" | "temperature" | "heart_rate";

interface CardStyle {
  label: string;
  valueType: string;
  backgroundColor: string;
  image: StaticImageData;
}

export const cardStyles: Record<DiagnosisKey, CardStyle> = {
  respiratory_rate: {
    label: "Respiratory Rate",
    valueType: "bpm",
    backgroundColor: "bg-[#E0F3FA]",
    image: respiratoryRate,
  },
  temperature: {
    label: "Temperature",
    valueType: "°F",
    backgroundColor: "bg-[#FFE6E9]",
    image: temperature,
  },
  heart_rate: {
    label: "Heart Rate",
    valueType: "bpm",
    backgroundColor: "bg-[#FFE6F1]",
    image: heartBpm,
  },
};
