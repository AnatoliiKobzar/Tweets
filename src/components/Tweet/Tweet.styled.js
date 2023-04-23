import styled from 'styled-components';

export const Wrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  transition: all 200ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,
      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;
    transform: scale(1.03);
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Button = styled.button`
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;

export const Decoration = styled.div`
  position: absolute;
  top: 214px;
  height: 8px;
  min-width: 100%;
  display: block;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: absolute;
  top: 176px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 1;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const TextWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 88px;
  margin-bottom: 26px;
`;
