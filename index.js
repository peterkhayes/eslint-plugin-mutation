"use strict";

module.exports = {
  rules: {
    "no-mutation": function(context) {
      var exceptions = (context.options[0] && context.options[0].exceptions) || ["this", "global"];
      return {
        "AssignmentExpression": function(node) {
          if (node.left.type !== "MemberExpression") return;
          if (exceptions.indexOf(node.left.object.name) > -1) return;
          if (node.left.object.type === "ThisExpression" && exceptions.indexOf("this") > -1) return;
          context.report(node, "No object mutation is allowed.");
        }
      };
    }   
  },
  configs: {
    recommended: {
      rules: {
        "mutation/no-mutation": 2
      }
    }
  }    
};