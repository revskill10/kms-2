module.exports=function(e){var r={};function __webpack_require__(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)__webpack_require__.d(t,o,function(r){return e[r]}.bind(null,o));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,r,t){const o=t(1),_=t(2),{ApolloServer:n,gql:u,PubSub:i}=t(3),l=u`
  type Query {
    hello: String
  }
  type Subscription {
    hello: String
  }
  type Mutation {
    hello(test: String): Boolean
  }
`,p=new i,a={Query:{hello:()=>"Hello world from ApolloServer on Now 2.0!"},Subscription:{hello:{subscribe:()=>p.asyncIterator(["HELLO"])}},Mutation:{hello:(e,r,t)=>(p.publish("HELLO",{hello:r}),!0)}},c=_(),s=new n({typeDefs:l,resolvers:a,introspection:!0,playground:!0});s.applyMiddleware({app:c,path:"/"});const b=o.createServer(c);s.installSubscriptionHandlers(b),b.listen(4e3,()=>{console.log(`🚀 Server ready at http://localhost:4000${s.graphqlPath}`),console.log(`🚀 Subscriptions ready at ws://localhost:4000${s.subscriptionsPath}`)})},function(e,r){e.exports=require("http")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("apollo-server-express")}]);
//# sourceMappingURL=index.js.map