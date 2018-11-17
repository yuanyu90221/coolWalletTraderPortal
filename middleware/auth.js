export default function ({store, error}) {
  console.log(`auth`)
  console.log(store.state)
  if (!store.state.authUser){
    error({
      message: 'You are not connnected',
      statusCode: 403
    })
  }
}
