import {useQuery, useQueryClient} from 'react-query';
import axios from 'axios';

const fetchData = () => {
  return axios.get('https://api.adviceslip.com/advice');
}

export const useRandomQoutes = (onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useQuery('quote', fetchData, {
      onSuccess,
      onError,
      select: (data) => {
        const randomQoute = data.data.slip.advice;
        return randomQoute;
      }
  })
}