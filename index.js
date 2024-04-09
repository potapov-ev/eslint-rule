const allowedSymbolsReg = /^[O0I1]+$/

module.exports = {
  meta: {
      type: "problem",
      docs: {
          description: "The variable includes characters in addition to the allowed ones"
      },
      fixable: "code",
      schema: []
  },
  create(context) {
    return {
        VariableDeclarator(node) {
            const isLiteral = node.init && node.init.type === "Literal"
            if (node.id.type === "Identifier" && isLiteral && !allowedSymbolsReg.test(node.id.name)) {
                context.report({
                    node,
                    message: 'The variable includes characters in addition to the allowed ones',
                });
            }
        }
    };
  }
};
