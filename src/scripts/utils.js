export const GetLoremIpsum = () => {
	const nparagraphs = Math.floor(Math.random()*5) + 1
  const body = fetch(`http://www.randomtext.me/api/lorem/p-${nparagraphs}/15-45`)
  	.then(res => res.json())
  	.then(data => data.text_out)
  return body;
}