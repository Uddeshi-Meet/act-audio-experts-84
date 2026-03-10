import { FullPageChat } from "flowise-embed-react";
import botAvatar from "@/assets/bot-avatar.jpg";
import userAvatar from "@/assets/user-avatar.jpg";
import chatbotIcon from "@/assets/chatbot-icon.png";

/**
 * FlowiseChatbot component using FullPageChat configuration.
 * Updated with local assets and removed welcome message.
 */
const FlowiseChatbot = () => {
  return (
    <FullPageChat
      chatflowid="2f48334d-c810-4815-bd3b-7c56444d561f"
      apiHost="https://cloud.flowiseai.com"
      chatflowConfig={{
        /* Chatflow Config */
      }}
      observersConfig={{
        /* Observers Config */
      }}
      theme={{
        button: {
          backgroundColor: "#d4772c",
          right: 20,
          bottom: 20,
          size: 56,
          dragAndDrop: true,
          iconColor: "white",
          customIconSrc: chatbotIcon,
          autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false,
          },
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: "Hi There 👋!",
          tooltipBackgroundColor: "black",
          tooltipTextColor: "white",
          tooltipFontSize: 16,
        },
        disclaimer: {
          title: "Disclaimer",
          message:
            'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
          textColor: "black",
          buttonColor: "#d4772c",
          buttonText: "Start Chatting",
          buttonTextColor: "white",
          blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundColor: "white",
        },
        customCSS: ``,
        chatWindow: {
          showTitle: true,
          showAgentMessages: false,
          title: "ACT Audio Assistant",
          titleAvatarSrc: chatbotIcon,
          errorMessage: "Oops, something went wrong. Please call us at 860-870-7676.",
          backgroundColor: "#ffffff",
          height: "100%",
          width: "100%",
          fontSize: 16,
          starterPrompts: ["What is a bot?", "Who are you?"],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
          showClearButton: true,
          sourceDocsTitle: "Sources:",
          renderHTML: true,
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc: botAvatar,
          },
          userMessage: {
            backgroundColor: "#d4772c",
            textColor: "#ffffff",
            showAvatar: true,
            avatarSrc: userAvatar,
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#d4772c",
            maxChars: 50,
            maxCharsWarningMessage:
              "You exceeded the characters limit. Please input less than 50 characters.",
            autoFocus: true,
            sendMessageSound: true,
            receiveMessageSound: true,
          },
          feedback: {
            color: "#303235",
          },
          dateTimeToggle: {
            date: true,
            time: true,
          },
          footer: {
            textColor: "#303235",
            text: "Powered by",
            company: "ACT Audio",
            companyLink: "https://www.actaudio.com",
          },
        },
      }}
    />
  );
};

export default FlowiseChatbot;
