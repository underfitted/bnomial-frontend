import React from "react";
import axios from "axios";

import { Question } from "./types";

export interface ApiClient {
    getRandomQuestion: () => Promise<Question>;
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
    getRandomQuestion: async () => {
        const response = await axios.get(`${BACKEND_URL}/questions/random`);
        return response.data as Question;
    },
};

// This client can be used to mock the API for testing
export const DummyApiClient: ApiClient = {
    getRandomQuestion: async () => {
        const dummyQuestion = {
            id: "2aknNA2V",
            title: "What is the capital of Spain?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            choices: {
                JRTADwJo: "Habana",
                "6YaCF2pa": "Miami",
                JAXPfWeO: "Madrid",
            },
            practice: false,
        };

        return dummyQuestion as Question;
    },
};
