/** Fetch has two properties.
 * Fist property is passed as a URL
 * Second property was passed .......
 */

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
