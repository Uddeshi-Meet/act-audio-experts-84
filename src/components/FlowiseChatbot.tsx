import { BubbleChat } from "flowise-embed-react";
import botAvatar from "@/assets/bot-avatar.jpg";
import userAvatar from "@/assets/user-avatar.jpg";
import chatbotIcon from "@/assets/chatbot-icon.png";

const FlowiseChatbot = () => {
  return (
    <BubbleChat
      chatflowid="437463b0-8e07-44a9-91a4-d21ccadc3d15"
      apiHost="https://cloud.flowiseai.com"
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
            autoOpen: false,
            openDelay: 3,
            autoOpenOnMobile: false,
          },
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: "Hi! Need help with your vehicle? 👋",
          tooltipBackgroundColor: "#1a1f2e",
          tooltipTextColor: "white",
          tooltipFontSize: 14,
        },
        chatWindow: {
          showTitle: true,
          showAgentMessages: false,
          title: "ACT Audio Assistant",
          titleAvatarSrc: chatbotIcon,
          welcomeMessage:
            "Hey! Welcome to ACT Audio. I can help you with car audio, window tinting, PPF, remote start, safety cameras, keys, and more. What are you looking to upgrade?",
          errorMessage: "Oops, something went wrong. Please call us at 860-870-7676.",
          backgroundColor: "#0d1117",
          height: 500,
          width: 400,
          fontSize: 15,
          starterPrompts: [
            "I want to upgrade my car audio",
            "Tell me about window tinting",
            "I need a remote start installed",
            "What financing options do you have?",
          ],
          starterPromptFontSize: 13,
          clearChatOnReload: false,
          renderHTML: true,
          botMessage: {
            backgroundColor: "#1a2030",
            textColor: "#e0e4ed",
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
            placeholder: "Ask about our services...",
            backgroundColor: "#141a24",
            textColor: "#e0e4ed",
            sendButtonColor: "#d4772c",
            autoFocus: true,
            sendMessageSound: true,
            receiveMessageSound: true,
          },
          feedback: {
            color: "#e0e4ed",
          },
          dateTimeToggle: {
            date: true,
            time: true,
          }
        },
      }}
    />
  );
};

export default FlowiseChatbot;
