import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

import path from "path";

const allTypes: GraphQLSchema[] = loadFilesSync(
  path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: any[] = loadFilesSync(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergeTypesVar = mergeTypeDefs(allTypes);
const mergeResolversVar = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergeTypesVar,
  resolvers: mergeResolversVar,
});

export default schema;
