import httpStatusCode from '../../data/httpStatusCode'

export default function handler(req, res) {

  const statusCode = httpStatusCode[req.query.id];
  if (statusCode) {
    res.status(200).json({
      statusCode: req.query.id,
      title: statusCode.title,
      description: statusCode.description.replace(/(<([^>]+)>)/gi, "")
    });
  } else {
    res.status(404).json({
      error: "Status code not found",
    });
  }
}
