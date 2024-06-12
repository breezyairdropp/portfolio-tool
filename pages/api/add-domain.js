import { SearchGoogleMaps } from "../../action/searchGoogleMaps"

export default async function handler(req, res) {
  const { query } = req.query

  let waitResponse = await SearchGoogleMaps(query)





  console.log(query)

  res.status(200).send(JSON.stringify(waitResponse))
}
