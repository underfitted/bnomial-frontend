import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
    ${tw`
    flex
    flex-col
    md:flex-row
    justify-start
   `}
`;

type ButtonProps = {
    highlighted: boolean;
};

export const Button = styled.button`
    ${tw`
    cursor-pointer
    font-bold
    rounded
    px-3
    py-2
    mr-1
    border-0
    text-white
    text-xs
    font-mono
  `}

    background: #1d1e1f;

    ${(props: ButtonProps) =>
        props.highlighted
            ? tw`bg-white
                 text-black`
            : tw`hover:text-black
                 hover:transition-all
                 hover:duration-200
                 hover:bg-white`}
`;
