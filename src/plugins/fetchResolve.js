const fetchResolve = (store) => {
  // в зависимости от того, какой ответ от сервера
  // следующий коммит будет либо в стор данных,
  // либо в ошибку
  store.subscribe(async (mutation) => {
    if (mutation.type === 'DATA_RECEIVED') {
      const { furtherCommit, errorCommit, response } = mutation.payload;
      const defaultErrorMessage = 'Ошибка сервера'
      let json;
      try {
        json = await response.json();
      } catch (error) {
        console.log(error, response.status)
        store.commit(errorCommit, defaultErrorMessage);
      }
      if (response.status < 300) {
        store.commit(furtherCommit, json);
        return;
      }
      store.commit(errorCommit, json.message || defaultErrorMessage);
    }
  });
};

export default fetchResolve;
