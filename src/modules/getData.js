const getData = (str) => {
    return fetch(
        `https://ozon-test-1330e-default-rtdb.firebaseio.com/goods.json`
        )
      .then((response) => {
        return response.json()
      })
      console.log(getData)
}

export default getData