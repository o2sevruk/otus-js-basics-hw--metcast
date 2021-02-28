export function setCookies(city) {
  const cookiesItem = city;
  let cookies = JSON.parse(localStorage.getItem('weatherHistory')) || [];
  cookies = [cookiesItem, ...cookies.filter((el) => el !== cookiesItem)];

  localStorage.setItem('weatherHistory', JSON.stringify(cookies.slice(0, 10)));
}

export function getCookies() {
  return JSON.parse(localStorage.getItem('weatherHistory')) || [];
}
