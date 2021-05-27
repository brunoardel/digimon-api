const getDigimons = async (url) => {
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (resp.status === 200) {
      return await resp.json();
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export { getDigimons };
