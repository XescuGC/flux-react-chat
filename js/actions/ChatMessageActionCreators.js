var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ActionTypes = ChatConstants.ActionTypes;

module.exports = {
  createMessage: function(text) {
    ChatAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_MESSAGE,
      text: text
    });
  }
};
