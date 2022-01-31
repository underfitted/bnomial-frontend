import tw, { styled } from "twin.macro";

export const HomeContainer = styled.div`
    ${tw`
    mt-8
    mb-4
    p-4
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

export const HeroImage = styled.div`
    ${tw`
    py-4
    pl-12
    `}

    img {
        ${tw`
        w-full
        `}
    }
`;

export const HomeSection = styled.div`
    ${tw`
    mt-16
    mb-16
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
        mb-8
        `}
    }
`;

export const QuestionContainer = styled.div`
    ${tw`
    mx-16
    p-8
    rounded-lg
    bg-[#1d1e1f]
    `}
`;

export const HowItWorksGrid = styled.div`
    ${tw`
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
    items-start
    font-mono
    text-sm
    `}

    h3 {
        ${tw`
        text-center
        font-mono
        text-base
        leading-3
        `}
    }

    p {
        ${tw`
        text-left
        leading-5
        `}
    }
`;
