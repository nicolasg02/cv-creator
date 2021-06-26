import { HeaderWrapper, Subtitle, Title } from "../styled/Header.styled";

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <Title>Create Your CV 📄</Title>
      <Subtitle>
        Fill the form below to create your own CV. You can edit it or download it.
      </Subtitle>
    </HeaderWrapper>
  );
};

export default Header;
