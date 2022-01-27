import tw, { styled } from "twin.macro";

export const QuestionNumberContainer = styled.div`
    ${tw`
    flex    
    items-center
    text-xs
    font-mono
  `}
`;

export const QuestionNumber = styled.div`
    ${tw`
    rounded-sm
    px-2
    py-1 
    ml-4
    bg-[#565758]
  `}
`;

export const QuestionTitle = styled.h1`
    ${tw`
    mt-16
    text-2xl
    font-bold
  `}
`;

export const QuestionDescription = styled.p`
    ${tw`
    mt-8
    font-mono
    text-sm
    text-[#e3e3e3]
  `}
`;

export const QuestionChoiceContainer = styled.div`
    ${tw`
    mt-24
    `}
`;

export const QuestionChoice = styled.div`
    ${tw`
    mb-1
    rounded-md
    p-5
    bg-[#242526]
    text-[#868787]
    hover:(bg-[#565758] text-white)
  `}
`;

export const QuestionButtonContainer = styled.div`
    ${tw` 
    mt-8
    `}
`;

export const QuestionButton = styled.button`
    ${tw`
    cursor-pointer
    font-mono
    rounded-sm
    px-8
    py-2
    mr-1
    border-0
    bg-[#565758]
    text-white
    transition-all
    duration-200
    hover:(text-black bg-white)
  `}

    &:hover {
        background-color: white;
        color: black;
    }
`;
