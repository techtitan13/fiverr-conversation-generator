const mongoose = require('mongoose');

// Define the message schema
const messageSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Define the conversation schema
const conversationSchema = new mongoose.Schema({
    participants: { type: [String], required: true },
    messages: { type: [messageSchema], default: [] },
    createdAt: { type: Date, default: Date.now }
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;