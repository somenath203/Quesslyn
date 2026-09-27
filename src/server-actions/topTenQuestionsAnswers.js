"use server";

import Groq from "groq-sdk";

import primsaClientConfig from "@/prismaClientConfig";
import { getAuthUserDetails } from "./authUserHelperDataFunc";


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export const generateTopTenQuestionAnswer = async (qnadata) => {

  try {

    const user = await getAuthUserDetails();

    const topTenQuestionAnswerPrompt = `
            You are an expert JSON generator. Generate an array of 10 objects where each object represents a question and an in-depth answer based on the following topic. Ensure the output is strictly a valid and properly formatted JSON object, without any additional text, commentary, or formatting.

            Topic: ${qnadata.topic}

            The JSON should include:
            - 'id': A unique ID for the question-answer pair.
            - 'question': A question based on the given topic.
            - 'answer': An in-depth answer to the corresponding question based on the given topic.

            The output must adhere to the following structure exactly, without deviations or extra information:

            {
                "questionsAndAnswers": [
                    {
                        "id": "1",
                        "question": "First Question based on the given topic",
                        "answer": "Answer based on the first question of the topic"
                    },
                    {
                        "id": "2",
                        "question": "Second Question based on the given topic",
                        "answer": "Answer based on the second question of the topic"
                    },
                    ...
                    {
                        "id": "10",
                        "question": "Tenth Question based on the given topic",
                        "answer": "Answer based on the tenth question of the topic"
                    }
                ]
            }

            Respond with only the JSON object and ensure it is well-formed, valid, and properly indented.
        `;

    const res = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            'You are an expert JSON generator. Generate an array of 10 objects where each object represents a question and an in-depth answer based on the following topic. Ensure the output is strictly a valid and properly formatted JSON object, without any additional text, commentary, or formatting.\n\n            Topic: Machine Learning\n\n            The JSON should include:\n            - \'id\': A unique ID for the question-answer pair.\n            - \'question\': A question based on the given topic.\n            - \'answer\': An in-depth answer to the corresponding question based on the given topic.\n\n            The output must adhere to the following structure exactly, without deviations or extra information:\n\n            {\n                "questionsAndAnswers": [\n                    {\n                        "id": "1",\n                        "question": "First Question based on the given topic",\n                        "answer": "Answer based on the first question of the topic"\n                    },\n                    {\n                        "id": "2",\n                        "question": "Second Question based on the given topic",\n                        "answer": "Answer based on the second question of the topic"\n                    },\n                    ...\n                    {\n                        "id": "10",\n                        "question": "Tenth Question based on the given topic",\n                        "answer": "Answer based on the tenth question of the topic"\n                    }\n                ]\n            }\n\n            Respond with only the JSON object and ensure it is well-formed, valid, and properly indented.',
        },
        {
          role: "assistant",
          content:
            '{\n    "questionsAndAnswers": [\n        {\n            "id": "1",\n            "question": "What is machine learning and how does it differ from traditional programming?",\n            "answer": "Machine learning (ML) is a subfield of artificial intelligence that focuses on developing algorithms capable of learning patterns from data and making predictions or decisions without being explicitly programmed for each specific task. In traditional programming, a developer writes explicit rules and logic that map inputs to outputs. In contrast, an ML system is trained on examples; it infers the underlying mapping automatically. This shift enables solutions to complex, high-dimensional problems such as image recognition, natural language processing, and recommendation systems, where hand‑crafted rules would be infeasible or overly brittle."\n        },\n        {\n            "id": "2",\n            "question": "What are the main types of machine learning paradigms?",\n            "answer": "The primary paradigms are:\\n1. **Supervised learning** – models are trained on labeled data, learning a function that maps inputs to known outputs (e.g., classification, regression).\\n2. **Unsupervised learning** – algorithms discover structure in unlabeled data, such as clustering or dimensionality reduction.\\n3. **Semi‑supervised learning** – combines a small amount of labeled data with a larger pool of unlabeled data to improve performance.\\n4. **Reinforcement learning** – an agent learns to make sequential decisions by interacting with an environment and receiving reward signals.\\n5. **Self‑supervised learning** – a form of unsupervised learning where the data itself provides pseudo‑labels, often used in language models and vision transformers."\n        },\n        {\n            "id": "3",\n            "question": "How do supervised learning algorithms work and what are common examples?",\n            "answer": "Supervised learning algorithms approximate a mapping \\\\(f: X \\\\rightarrow Y\\\\) using a training set \\\\(\\\\{(x_i, y_i)\\\\}_{i=1}^n\\\\). The algorithm selects a hypothesis class (e.g., linear functions, decision trees, neural networks) and optimizes a loss function that quantifies the discrepancy between predicted outputs \\\\(\\\\hat{y}_i = f(x_i)\\\\) and true labels \\\\(y_i\\\\). Optimization typically involves gradient‑based methods or combinatorial search. Common examples include:\\n- **Linear regression** for continuous targets, minimizing mean squared error.\\n- **Logistic regression** for binary classification, optimizing cross‑entropy loss.\\n- **Support vector machines** that maximize the margin between classes.\\n- **Decision trees** and ensemble methods like Random Forests and Gradient Boosting Machines, which partition feature space hierarchically.\\n- **Convolutional neural networks** for image classification and **recurrent/transformer models** for sequence data."\n        },\n        {\n            "id": "4",\n            "question": "What is overfitting, why is it problematic, and how can it be mitigated?",\n            "answer": "Overfitting occurs when a model captures noise or idiosyncrasies in the training data rather than the underlying signal, leading to poor generalization on unseen data. It is problematic because it inflates training performance while degrading real‑world utility. Mitigation strategies include:\\n- **Cross‑validation** to assess performance on held‑out data.\\n- **Regularization** (e.g., L1/L2 penalties) to constrain model complexity.\\n- **Early stopping** during iterative training when validation loss stops improving.\\n- **Model simplification** by reducing depth, number of parameters, or choosing a less expressive hypothesis class.\\n- **Data augmentation** and **collecting more diverse training samples** to provide a richer representation of the true distribution."\n        },\n        {\n            "id": "5",\n            "question": "Explain the bias‑variance tradeoff in machine learning models.",\n            "answer": "The bias‑variance tradeoff describes the balance between two sources of error:\\n- **Bias** is error from erroneous assumptions in the learning algorithm; high‑bias models (e.g., linear regression on highly nonlinear data) underfit and miss important patterns.\\n- **Variance** is error from sensitivity to fluctuations in the training set; high‑variance models (e.g., deep neural networks with limited data) overfit to noise.\\nThe expected prediction error can be decomposed as \\\\(\\\\text{Error} = \\\\text{Bias}^2 + \\\\text{Variance} + \\\\text{Irreducible\\\\ Noise}\\\\). Effective model selection aims to find a sweet spot where both bias and variance are minimized, often via techniques like regularization, ensemble methods, and appropriate model capacity selection."\n        },\n        {\n            "id": "6",\n            "question": "What are neural networks and how do they approximate complex functions?",\n            "answer": "Neural networks are computational graphs composed of layers of interconnected artificial neurons. Each neuron computes a weighted sum of its inputs, adds a bias, and applies a nonlinear activation function (e.g., ReLU, sigmoid). By stacking multiple layers, the network can compose simple nonlinear transformations into highly expressive mappings. According to the universal approximation theorem, a feed‑forward network with at least one hidden layer containing a sufficient number of neurons can approximate any continuous function on a compact domain to arbitrary precision, provided appropriate weights exist. Training adjusts these weights via gradient‑based optimization to minimize a loss function on the training data."\n        },\n        {\n            "id": "7",\n            "question": "How does gradient descent optimize model parameters and what are its variants?",\n            "answer": "Gradient descent (GD) iteratively updates model parameters \\\\(\\\\theta\\\\) in the opposite direction of the gradient of the loss \\\\(L(\\\\theta)\\\\): \\\\(\\\\theta_{t+1}=\\\\theta_t - \\\\eta \\\\nabla_\\\\theta L(\\\\theta_t)\\\\), where \\\\(\\\\eta\\\\) is the learning rate. Variants include:\\n- **Batch GD**: computes gradients over the entire dataset; stable but computationally expensive.\\n- **Stochastic GD (SGD)**: updates parameters using a single randomly selected sample per step; introduces noise that can help escape shallow minima.\\n- **Mini‑batch GD**: balances efficiency and noise by using small subsets (batches).\\n- **Momentum**: accumulates a velocity vector to smooth updates and accelerate convergence.\\n- **AdaGrad, RMSProp, Adam**: adaptive methods that adjust learning rates per parameter based on past gradients, improving convergence on sparse or noisy problems."\n        },\n        {\n            "id": "8",\n            "question": "What is cross‑validation and why is it important for model evaluation?",\n            "answer": "Cross‑validation (CV) is a resampling technique that assesses how a predictive model will generalize to an independent dataset. The most common form, *k‑fold CV*, splits the data into *k* equally sized folds; each fold is used once as a validation set while the remaining *k‑1* folds form the training set. Performance metrics are averaged across folds, providing a more reliable estimate than a single train‑test split. CV helps detect overfitting, guides hyperparameter tuning, and is especially valuable when data are limited, ensuring that evaluation leverages all available samples."\n        },\n        {\n            "id": "9",\n            "question": "How do regularization techniques such as L1 and L2 improve model generalization?",\n            "answer": "Regularization adds a penalty term to the loss function to discourage overly complex models. **L2 regularization** (Ridge) adds \\\\(\\\\lambda \\\\|\\\\theta\\\\|_2^2\\\\), penalizing large weights uniformly, which shrinks parameters toward zero and improves numerical stability. **L1 regularization** (Lasso) adds \\\\(\\\\lambda \\\\|\\\\theta\\\\|_1\\\\), encouraging sparsity by driving many weights exactly to zero, effectively performing feature selection. Both techniques reduce variance by limiting the model\'s capacity to fit noise, thereby enhancing generalization. The hyperparameter',
        },
        {
          role: "user",
          content: topTenQuestionAnswerPrompt,
        },
      ],
      model: "openai/gpt-oss-20b",
    });

    const resFromAI = res?.choices[0]?.message?.content;

    const resFromAIParsed = JSON.parse(resFromAI);

    if (resFromAIParsed) {

      const dataStored = await primsaClientConfig.topTenQuestionsAnswers.create(
        {
          data: {
            topic: qnadata?.topic,
            responseFromModel: resFromAIParsed,
            emailOfTheProfileWhoGeneratedTopTenQnA: user?.email,
          },
        },
      );

      return {
        success: true,
        message: "your top ten question-answer has been saved successfully",
        data: dataStored
      };

    }

    return {
      success: false,
      message: "something went wrong while generating qna",
    };

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message:
        error?.message ||
        "Something went wrong. Please try again after sometime",
    };

  }

};


export const fetchAllTopTenQuestionsAnswersByTheUser = async () => {

  try {

    const user = await getAuthUserDetails();

    const allTopTenQnACreatedByTheUser =
      await primsaClientConfig.topTenQuestionsAnswers.findMany({
        where: {
          emailOfTheProfileWhoGeneratedTopTenQnA: user?.email,
        },
      });

    return allTopTenQnACreatedByTheUser;

  } catch (error) {

    return {
      success: false,
      message:
        error?.message ||
        "Something went wrong. Please try again after sometime",
    };

  }

};


export const fetchParticularQnAById = async (qnaId) => {

  try {

    const qna = await primsaClientConfig.topTenQuestionsAnswers.findUnique({
      where: {
        id: qnaId,
      },
    });

    return {
      success: true,
      data: qna,
    };

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: error?.message || "something went wrong, please try again",
    };
    
  }

};

export const deleteTopTenQnAById = async (id) => {

  try {

    await primsaClientConfig.topTenQuestionsAnswers.delete({
      where: {
        id: id,
      },
    });

    return {
      success: true,
      message: "Top 10 qna data has been deleted successfully",
    };

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: error?.message || "Something went wrong. Please try again later",
    };

  }
  
};
