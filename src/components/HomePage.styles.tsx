import tw, { styled } from "twin.macro";

export const PageContainer = styled.div`
    ${tw`
    mt-8
    mb-4
    p-8
    max-w-screen-md
    `}
`;

export const HeroContainer = styled.div`
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

export const QuestionContainer = styled.div`
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
