import tw, { styled } from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-start
    transition-all
    z-10
    ml-14
  `}
  ${(props: { dark: boolean }) =>
    props.dark ? tw`bg-black` : tw`bg-transparent`}
  img {
    ${tw`
      h-16
    `}
  }
`;
