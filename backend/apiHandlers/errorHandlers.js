function defaultErrorHandler(err, req, res, next) {
  if (err && err.type) {
    switch (err.type) {
      case 'foo':
        res.status(400).json({ type: 'foo-error', error: err });
        break;
      default:
        res.status(500).json({ type: 'unknown error', error: err });
        break;
    }
  }
  else {
    res.status(500).json({ error: err });
  }
}

module.exports = {
  defaultErrorHandler: defaultErrorHandler
};