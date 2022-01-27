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
    ${(props: { dark?: boolean }) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}
`;

type ButtonProps = {
    highlighted: boolean;
};

export const Button = styled.button`
    ${tw`
    cursor-pointer
    font-bold
    rounded
    px-4
    py-2
    mr-2
  `}

    ${(props: ButtonProps) =>
        props.highlighted
            ? tw`
        bg-white
        text-black
      `
            : tw`
        bg-gray-900
        text-white
        hover:bg-white
        hover:text-black
        hover:transition-all
        hover:duration-200
      `}
`;
