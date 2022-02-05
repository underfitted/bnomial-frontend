import React from "react";

import * as generatedClient from "./api/generatedClient";

import { Question } from "./types";

export interface ApiClient {
    getRandomQuestion: () => Promise<Question>;
    getSampleQuestions: () => Promise<Question[]>;
}

export const ApiContext = React.createContext<ApiClient | null>(null);

export const useApiClient = () => {
    const apiClient = React.useContext(ApiContext);
    if (!apiClient) {
        throw new Error("useApi must be used within an ApiProvider");
    }
    return apiClient;
};

// TODO: Replace with real backend URL provided via env vars
const BACKEND_URL = "https://hv2i83bavj.execute-api.us-east-1.amazonaws.com/prod";

export const DefaultApiClient: ApiClient = {
    getRandomQuestion: async () => generatedClient.getRandomQuestion({ baseUrl: BACKEND_URL }),
    getSampleQuestions: async () => generatedClient.getSampleQuestions({ baseUrl: BACKEND_URL }),
};

// This client can be used to mock the API for testing
export const DummyApiClient: ApiClient = {
    getRandomQuestion: async () => {
        const dummyQuestion: Question = {
            id: "2aknNA2V",
            title: "What is the capital of Spain?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            choices: {
                JRTADwJo: "Habana",
                "6YaCF2pa": "Miami",
                JAXPfWeO: "Madrid",
            },
        };

        return dummyQuestion;
    },
    getSampleQuestions: async () => {
        const dummyQuestions: Question[] = [
            {
                id: "8rDKTRQP",
                title: "What is the capital of Costa Rica?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "San Jose", JAXPfWeO: "Madrid" },
            },
            {
                id: "AZuNypKr",
                title: "What is the capital of Angola?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Luanda", JAXPfWeO: "Madrid" },
            },
            {
                id: "FKnnLpBg",
                title: "What is the capital of Argentina?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Buenos Aires", JAXPfWeO: "Madrid" },
            },
            {
                id: "P2J8deL2",
                title: "What is the capital of Australia?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Canberra", JAXPfWeO: "Madrid" },
            },
            {
                id: "eOq9N29B",
                title: "What is the capital of China?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Beijing", JAXPfWeO: "Madrid" },
            },
            {
                id: "hBx98mMe",
                title: "What is the capital of Bahamas?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Nassau", JAXPfWeO: "Madrid" },
            },
            {
                id: "hTd8ySYZ",
                title: "What is the capital of Bulgaria?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Sofia", JAXPfWeO: "Madrid" },
            },
            {
                id: "rlGTW6bu",
                title: "What is the capital of Belgium?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Brussels", JAXPfWeO: "Madrid" },
            },
            {
                id: "rqpbRl03",
                title: "What is the capital of Canada?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Ottawa", JAXPfWeO: "Madrid" },
            },
            {
                id: "yXjGbHG1",
                title: "What is the capital of Brasil?",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                choices: { JRTADwJo: "Naples", "6YaCF2pa": "Brasilia", JAXPfWeO: "Madrid" },
            },
        ];

        return dummyQuestions;
    },
};
