import nltk
from nltk.chat.util import Chat, reflections

def initialize_chatbot():
    # Define pairs of patterns and responses
    pairs = [
    ["show resume", ["You can view my resume on my website. Here's the link: https://www.example.com/resume"]],
    ["resume", ["You can view my resume on my website. Here's the link: https://www.example.com/resume"]],
    ["show projects", ["You can check out my projects on my website. Here's the link: https://www.example.com/projects"]],
    ["projects", ["You can check out my projects on my website. Here's the link: https://www.example.com/projects"]],
    ["show about", ["You can learn more about me on my website. Here's the link: https://www.example.com/about"]],
    ["about", ["You can learn more about me on my website. Here's the link: https://www.example.com/about"]],
    ["show contact", ["You can contact me via email at example@example.com or through the contact form on my website: https://www.example.com/contact"]],
    ["contact", ["You can contact me via email at example@example.com or through the contact form on my website: https://www.example.com/contact"]],
    ["quit|exit", ["Goodbye!"]],
    ]

    # Create a chatbot instance
    chatbot = Chat(pairs, reflections)
    return chatbot

def chat_with_bot(chatbot):
    print("Bot: Hi, how can I help you?")
    while True:
        user_input = input("You: ")
        response = chatbot.respond(user_input)
        print("Bot:", response)

# Main function
def main():
    # Initialize the chatbot
    bot = initialize_chatbot()

    # Start chatting
    chat_with_bot(bot)

if __name__ == "__main__":
    main()