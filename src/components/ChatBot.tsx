import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    ChatBotKit?: {
      instancePromise?: Promise<{
        open: boolean;
        sendMessage: (message: string) => void;
      }>;
    };
  }
}

const ChatBot = () => {
  const location = useLocation();
  const previousPathRef = useRef<string>('');
  const widgetInitialized = useRef(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.chatbotkit.com/integrations/widget/v2.js';
    script.setAttribute('data-widget', 'cmlprbvqe000c04l19v9ernxt');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const shouldOpenWidget =
      previousPathRef.current.includes('/features') ||
      previousPathRef.current.includes('/fr/fonctionnalites');

    const getMessage = () => {
      if (previousPathRef.current.includes('/fr/')) {
        return 'Bonjour, puis-je vous aider ?';
      }
      return 'Halo kan ik je helpen';
    };

    const checkAndOpenWidget = () => {
      if (window.ChatBotKit?.instancePromise && shouldOpenWidget && !widgetInitialized.current) {
        window.ChatBotKit.instancePromise.then((widget) => {
          widget.open = true;
          widgetInitialized.current = true;

          setTimeout(() => {
            widget.sendMessage(getMessage());
          }, 500);
        });
      }
    };

    const handleWidgetInit = (event: Event) => {
      if (shouldOpenWidget && !widgetInitialized.current) {
        const widget = (event as CustomEvent).target as {
          open: boolean;
          sendMessage: (message: string) => void;
        };

        widget.open = true;
        widgetInitialized.current = true;

        setTimeout(() => {
          widget.sendMessage(getMessage());
        }, 500);
      }
    };

    window.addEventListener('chatbotkitWidgetInit', handleWidgetInit);

    setTimeout(checkAndOpenWidget, 1000);

    previousPathRef.current = location.pathname;

    return () => {
      window.removeEventListener('chatbotkitWidgetInit', handleWidgetInit);
    };
  }, [location]);

  return null;
};

export default ChatBot;
