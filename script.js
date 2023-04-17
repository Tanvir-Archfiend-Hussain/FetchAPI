/** Fetch has two properties.
 * Fist property is passed as a URL
 * Second property was passed .......
 */

fetch("https://reqres.in/api/users/12")
  .then((res) => res.json())
  .then((data) => console.log(data));
