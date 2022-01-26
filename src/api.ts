import React from 'react';
import axios from "axios";

import { Question } from './types';

export interface ApiClient {
  getRandomQuestion: () => Promise<Question>;
}

export const ApiContext = React.createContext<ApiClient | null>(null);


export const useApiClient = () => {
  const apiClient = React.useContext(ApiContext);
  if (!apiClient) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return apiClient;
}


const BACKEND_URL = "https://hv2i83bavj.execute-api.us-east-1.amazonaws.com/prod";

export const endpoints = {
  random_question: "questions/random",
};

export const DefaultApiClient: ApiClient = {
  getRandomQuestion: async () => {
    const response = await axios.get(`${BACKEND_URL}/questions/random`);
    return response.data as Question;
  },
};
