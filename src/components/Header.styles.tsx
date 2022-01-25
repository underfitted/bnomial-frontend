import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    justify-start
    pt-14
    px-14
    transition-all
    z-10
  `}
  ${(props: { dark: boolean }) =>
    props.dark ? tw`bg-black` : tw`bg-transparent`}
`;

export const HeaderButton = styled.button`
  ${tw`
    cursor-pointer
    font-bold
    rounded
    px-4
    py-2
    mr-2
  `}
  background-color: #1D1E1F;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    transition: all 0.2s;
  }
`;

export const HeaderActiveButton = styled.button`
  ${tw`
    cursor-pointer
    font-bold
    rounded
    px-4
    py-2
    mr-2
  `}
  background-color: white;
  color: black;
`;
