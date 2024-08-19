import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 h-auto">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <p className="mb-4">
        <strong>LangBoostAI</strong> is an AI-powered language learning platform designed to help you gauge and refine your understanding of a new language. Unlike traditional methods that focus on rote memorization, LangBoostAI uses advanced AI to teach you essential concepts such as sentence structure, vocabulary, and linguistic patterns. This approach allows you to gain a deeper, more comprehensive understanding of the language, empowering you to use it effectively and confidently.
      </p>
      <p className="mb-4">
        The app currently features a robust translation tool powered by OpenAI and Azure AI, which not only translates text but also breaks down the details of the translation, helping you understand the underlying structure and meaning. Additionally, we’re working on a spaced repetition vocabulary learning feature, which will help you retain and master new words over time.
      </p>
      <p className="mb-4">
        Whether you’re a beginner or an advanced learner, LangBoostAI is designed to enhance your language learning experience, making it more intuitive, engaging, and insightful.
      </p>
      <p className="mb-4">
        Please note that your conversational partner in the app is AI, not a real person. While it’s a powerful tool for learning, we encourage you to interact with it kindly and respectfully.
      </p>
      <p>
        As LangBoostAI is still in development, you may encounter some bugs or rough edges. We’re continuously working to improve the app, and your feedback is invaluable in helping us create the best learning experience possible.
      </p>
    </div>
  );
};

export default About;
