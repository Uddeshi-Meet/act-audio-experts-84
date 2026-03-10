import { FullPageChat } from "flowise-embed-react";

const FlowiseChatbot = () => {
  return (
    <FullPageChat
      chatflowid="2f48334d-c810-4815-bd3b-7c56444d561f"
      apiHost="https://cloud.flowiseai.com"
      theme={{
        chatWindow: {
          showTitle: true,
          showAgentMessages: false,
          title: 'ACT Audio Assistant',
          titleAvatarSrc: '/images/chatbot-icon.png',
          welcomeMessage: 'Hey! Welcome to ACT Audio. I can help you with car audio, window tinting, PPF, remote start, safety cameras, keys, and more. What are you looking to upgrade?',
          errorMessage: 'Oops, something went wrong. Please call us at 860-870-7676.',
          backgroundColor: '#0d1117',
          height: '100%',
          width: '100%',
          fontSize: 16,
          starterPrompts: [
            "I want to upgrade my car audio",
            "Tell me about window tinting",
            "I need a remote start installed",
            "What financing options do you have?"
          ],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
          showClearButton: true,
          renderHTML: true,
          botMessage: {
            backgroundColor: '#1a2030',
            textColor: '#e0e4ed',
            showAvatar: true,
            avatarSrc: '/images/bot-avatar.jpg'
          },
          userMessage: {
            backgroundColor: '#d4772c',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: '/images/user-avatar.jpg'
          },
          textInput: {
            placeholder: 'Ask about our services...',
            backgroundColor: '#141a24',
            textColor: '#e0e4ed',
            sendButtonColor: '#d4772c',
            autoFocus: true,
            sendMessageSound: true,
            receiveMessageSound: true
          },
          feedback: {
            color: '#e0e4ed'
          },
          dateTimeToggle: {
            date: true,
            time: true
          },
          footer: {
            textColor: '#6b7280',
            text: 'Powered by',
            company: 'ACT Audio',
            companyLink: 'https://www.actaudio.com'
          }
        }
      }}
    />
  );
};

export default FlowiseChatbot;
