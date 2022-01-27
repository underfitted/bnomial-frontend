import tw, { styled } from "twin.macro";

export const QuestionContainer = styled.div`
    ${tw`
  pt-8
  px-14
  pb-4
  m-14
  mb-4
  mt-8
  max-w-screen-md
  rounded-[8px]
  `}

    background-size: cover !important;
    background-color: #1d1e1f;
`;

export const QuestionTitle = styled.h1`
    ${tw`
    text-2xl
    font-bold
    mb-8
    mt-16
  `}
`;

export const QuestionDescription = styled.p`
    ${tw`
    font-light
    text-lg
    mb-14
    break-words
  `}
    line-height: 1.3;
    color: #e3e3e3;
`;

export const QuestionButton = styled.button`
    ${tw`
    cursor-pointer
    font-bold
    rounded
    px-8
    py-2
    mr-2
    mt-8
    mb-8
  `}

    background-color: #565758;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        transition: all 0.2s;
    }
`;

export const QuestionChoice = styled.div`
    ${tw`
    rounded-[8px]
    mt-2
    p-4 
    hover:(bg-[#565758])
  `}
    background-color: #242526
`;

export const QuestionNumber = styled.div`
    ${tw`
    rounded-[4px]
    max-w-max 
    px-2
    py-1 
    ml-4
  `}
    background-color: #565758
`;

export const QuestionNumberContainer = styled.div`
    ${tw`
    font-light
    flex    
    flex-row 
    items-center 
  `}
`;
