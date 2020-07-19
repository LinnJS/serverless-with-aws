module.exports.handler = (event, context, done) => {
    done(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({message: 'hello'})
    })
  }
  