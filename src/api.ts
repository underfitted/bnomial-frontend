import React from 'react';

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
