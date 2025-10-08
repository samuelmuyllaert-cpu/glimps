import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Load ChatBotKit widget script
    const script = document.createElement('script');
    script.id = 'chatbotkit-widget';
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmgigx7121ehx1uec2rc6uojy');
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.getElementById('chatbotkit-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default ChatWidget;
