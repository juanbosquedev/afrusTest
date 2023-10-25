export const get = async (endPoint) => {
  try {
    const response = await fetch(`https://jsonplaceholder.org/${endPoint}`);
    const data = await response.json();

    return { data, isLoading: false };
  } catch (error) {
    console.log(error);
  }
};
