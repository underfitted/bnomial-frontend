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
    bg-[#1d1e1f]
    transition-all
    duration-200
    hover:(text-black bg-white)
    `}

    ${(props: ButtonProps) => {
        if (props.highlighted) return tw`bg-white text-black`;
    }}
`;
