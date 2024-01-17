import { API_KEY } from "./apiKey";

interface dataType {
  "year": string;
  "month": string;
  "day": string;
  "weight": string;
  "count": string;
}

export const getAllData = async (): Promise<dataType[]> => {
  try {
    const res = await fetch(`${API_KEY}/default`);
    const json = await res.json();
    return json
  } catch (error) {
    throw new Error(`error: ${error}`)
  }
}

export const getData = async (
  year: number,
  month: number,
  day: number
  ): Promise<dataType[]> => {
  const serchQuery = {
    "year": year.toString(),
    "month": month.toString(),
    "day": day.toString(),
  }
  try {
    const res = await fetch(`${API_KEY}/default?search=${JSON.stringify(serchQuery)}`);
    const json = await res.json();
    return json    
  } catch (error) {
    throw new Error(`error: ${error}`)
  }
}

// const serchedData = await getData(2024, 1, 17);
// console.log(serchedData);

interface resType {
  "updatedRange": string;
}

export const postNewData = async (
  year: number,
  month: number,
  day: number,
  weight: number,
  count: number
  ): Promise<resType> => {

  const body: dataType = {
    "year": year.toString(),
    "month": month.toString(),
    "day": day.toString(),
    "weight": weight.toString(),
    "count": count.toString(),
  };

  try {
    const res = await fetch(`${API_KEY}/default`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([body])
    });
    const json = await res.json();
    return json
  } catch (error) {
    throw new Error(`error: ${error}`)
  }
};

// const result = await postNewData(2024, 1, 17, 40, 10);
// console.log(result);