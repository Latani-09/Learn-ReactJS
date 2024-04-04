
var express=require('express');
var  {graphql, buildSchema } =require ( 'graphql');
const { createHandler } = require('graphql-http');


var schema=buildSchema(`
    type  Query{
        hello:String

    }`
)
var root={
    hello(){
        return 'Hello World!'
    }
}
/* graphql({
    schema,
    source:"{hello}",
    rootValue
}).then(response=>{
    console.log(response)
})
*/
var app=express();
app.all(
    "/graphql",
    createHandler({
      schema: schema,
      rootValue: root,
    })
  )
   
  // Serve the GraphiQL IDE.
  app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
   
  // Start the server at port
  app.listen(4000)
  console.log("Running a GraphQL API server at http://localhost:4000/graphql")

