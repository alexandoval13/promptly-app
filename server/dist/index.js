"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// Test routes
app.get('/api', (req, res) => {
    res.send({ message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
// // User routes
// app.get('/user/:id', (req, res) => {
//   console.log({ req });
//   res.send({ user: `Your User is ${req.params ? req.params.id : 'unknown'}` });
// });
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map