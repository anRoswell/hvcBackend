const Response = ({
  success: (data, status = 200) => {
    return { data, status }
  },
  error: (msg, status = 400) => {
    return {
      error: {
        type: msg.type,
        message: msg.message
      },
      status: status,
    }
  }
});

module.exports = Response;