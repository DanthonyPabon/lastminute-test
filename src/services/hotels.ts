import {getAxios, IRes} from './fetch';

const getAllHotels = (): Promise<IRes<any>> => {
  return getAxios({
    url: 'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507',
  });
};

const HotelsApi = {getAllHotels};

export default HotelsApi;
