# LangBoostAI

LangBoostAI is an AI-powered language learning platform designed to help users gauge and refine their understanding of a new language. Unlike traditional methods that rely on rote memorization, LangBoostAI uses advanced AI to teach essential concepts such as sentence structure, vocabulary, and linguistic patterns, allowing users to gain a deeper, more comprehensive understanding of the language they are learning. 
## Check out the live site [Here](https://lang-learn-hazel.vercel.app/).


## Features

- **AI-Powered Translation**: Translate text with a robust tool powered by OpenAI and Azure AI. LangBoostAI not only translates text but also breaks down the details of the translation, helping you understand the underlying structure and meaning.
- **Spaced Repetition Vocabulary Learning (Upcoming)**: Master new words over time with our upcoming spaced repetition feature, designed to enhance vocabulary retention.
- **AI-Powered Chat**: Interact with AI to practice language skills. While the AI suggests topics, users can ask for clarification on words or phrases or change the topic entirely.
- **Comprehensive Learning Approach**: Focuses on teaching sentence structure, vocabulary, and patterns, offering a deeper understanding of how languages work rather than just memorizing words.

## Tech Stack

- **Frontend**: React.js, Next.js 14
- **Backend**: Node.js, Express.js, Mongoose
- **AI Services**: OpenAI, Azure AI Translate Service, Azure OpenAI
- **Database**: Azure Cosmos DB
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Deployment**: Vercel



## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB (for local development)
- Clerk API Key (for authentication)

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/langboostai.git
cd langboostai
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Set up environment variables:

Create a `.env.local` file in the root of the project and add the necessary environment variables:

```plaintext
NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
CLERK_API_KEY=<your_clerk_api_key>
AZURE_TRANSLATE_API_KEY=<your_azure_translate_api_key>
MONGODB_URI=<your_mongodb_connection_string>
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate to the homepage and start translating text using the AI-powered translation tool.
- Explore the breakdown of sentence structures and vocabulary provided by the AI.
- (Upcoming) Use the spaced repetition feature to enhance your vocabulary learning experience.

## Contributing

We welcome contributions to LangBoostAI! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---
