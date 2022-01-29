import tw, { styled } from "twin.macro";

export const PageContainer = styled.div`
    ${tw`
    mt-8
    mb-4
    p-8
    max-w-screen-md
    `}
`;

export const HeroSection = styled.div`
    ${tw`
    grid
    grid-cols-1
    md:grid-cols-2
    gap-1
    items-center
    `}

    h1 {
        ${tw`
        text-4xl
        mb-8
        `}
    }

    p {
        ${tw`
        text-sm
        font-mono
        font-light
        `}
    }
`;

export const HeroImage = styled.h2`
    ${tw`
    p-8
    `}

    img {
        ${tw`
        w-full
        `}
    }
`;

export const QuestionSection = styled.div`
    ${tw`
    
    `}

    h2 {
        ${tw`
        text-center
        text-2xl
        leading-3
        `}
    }

    p {
        ${tw`
        text-center
        font-mono
        text-sm
        leading-3
        `}
    }
`;

export const QuestionContainer = styled.div`
    ${tw`
    mt-16
    mx-16
    px-24
    py-8
    rounded-lg
    bg-[#1d1e1f]
    `}
`;
