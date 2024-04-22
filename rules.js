const allowedSymbolsReg = /^[O0I1]+$/

module.exports = {
  meta: {
      type: "problem",
      docs: {
          description: "Названия переменных должны состоять из указанных символов - O, 0, I, 1"
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
                    message: 'Названия переменных должны состоять из указанных символов - O, 0, I, 1',
                });
            }
        }
    };
  }
};