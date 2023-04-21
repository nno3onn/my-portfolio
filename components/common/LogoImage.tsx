import { flexCenter } from "@/styles/flexCenter";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface LogoImageProps {
  logoImage: StaticImageData;
}

const LogoImage = ({ logoImage }: LogoImageProps) => {
  return (
    <LogoWrapper>
      <Image src={logoImage} width={180} alt="logo" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 240px;
  border: 1px solid ${({ theme }) => theme.fontColor.grey2};
  background-color: ${({ theme }) => theme.backgroundColor.white};

  ${flexCenter}

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
