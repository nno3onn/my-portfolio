import { flexCenter } from "@/styles/flexCenter";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface LogoImageProps {
  logoImage: StaticImageData;
  bgColor?: string;
}

const LogoImage = ({ logoImage, bgColor }: LogoImageProps) => {
  return (
    <LogoWrapper bgColor={bgColor}>
      <Image src={logoImage} width={180} alt="logo" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div<{ bgColor: string }>`
  width: 240px;
  height: 240px;
  border-radius: 240px;
  border: 1px solid ${({ theme }) => theme.fontColor.grey2};
  background-color: ${({ bgColor, theme }) => bgColor || theme.backgroundColor.white};
  overflow: hidden;

  ${flexCenter}

  img {
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
    img {
      width: 110px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
    img {
      width: 180px;
      height: auto;
    }
  }
`;

export default LogoImage;
