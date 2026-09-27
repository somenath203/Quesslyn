"use server";

import Groq from "groq-sdk";

import primsaClientConfig from "@/prismaClientConfig";
import { getAuthUserDetails } from "./authUserHelperDataFunc";


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export const createRoadMap = async (roadmapData) => {

  try {

    const user = await getAuthUserDetails();

    const generateStudentRoadmapPrompt = `
            You are an expert JSON generator. Ensure the output is strictly a valid and properly formatted JSON object, without any additional text, commentary, or formatting.
            
            Based on the following details, create a personalized roadmap that outlines a step-by-step study plan for the student. Each step in the roadmap should include:
            - A unique ID for the step.
            - A step number in the format "Step 1," "Step 2," etc.
            - A detailed description for the step, providing specific guidance and tasks for the student.

            Additionally, create a clear, concise title for the roadmap that reflects the subject, education level, and exam name.

            Student Details:
            - Subject: ${roadmapData.studentSubjectName}
            - Education Level: ${roadmapData.studentEducationLevel}
            - Average Daily Study Hours: ${roadmapData.averageDailyStudyHours}
            - Exam Name: ${roadmapData.studentExamName}
            - Days Remaining Until Exam: ${roadmapData.daysRemainingUntilExam}
            - Syllabus Topics: 
              ${roadmapData.syllabusTopics}

            The output must be a valid JSON object only. It should be structured exactly as shown below, without any additional text, commentary, or formatting:

            {
                "title": "Generated Title for Roadmap",
                "roadmap": [
                    {
                        "id": "1",
                        "step": "Step 1",
                        "description": "Detailed guidance for the first step, including specific tasks based on the student's subject, education level, and remaining time."
                    },
                    {
                        "id": "2",
                        "step": "Step 2",
                        "description": "Detailed guidance for the second step, focusing on progressing further in the syllabus and adjusting based on daily study hours."
                    },
                    ...
                    {
                        "id": "n",
                        "step": "Step n",
                        "description": "Detailed guidance for the final step, wrapping up revision and preparing for the exam day."
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
            'You are an expert JSON generator. Ensure the output is strictly a valid and properly formatted JSON object, without any additional text, commentary, or formatting.\n\n            Based on the following details, create a personalized roadmap that outlines a step-by-step study plan for the student. Each step in the roadmap should include:\n            - A unique ID for the step.\n            - A step number in the format "Step 1," "Step 2," etc.\n            - A detailed description for the step, providing specific guidance and tasks for the student.\n\n            Additionally, create a clear, concise title for the roadmap that reflects the subject, education level, and exam name.\n\n            Student Details:\n            - Subject: Deep Learning\n            - Education Level: Undergraduate Degree\n            - Average Daily Study Hours: 5\n            - Exam Name: Deep Learning\n            - Days Remaining Until Exam: 35\n            - Syllabus Topics:\n              UNIT 1: Introduction to Deep Learning\n- Introduction to Artificial Intelligence, Machine Learning, and Deep Learning\n- Difference between traditional machine learning and deep learning\n- Applications of deep learning\n- Types of machine learning: supervised, unsupervised, and reinforcement learning\n- Biological neurons and artificial neurons\n- Perceptron and its working\n- Introduction to neural networks\n- Structure of a neural network\n- Input layer, hidden layers, and output layer\n- Weights, biases, and activation functions\n- Forward propagation\n- Loss functions\n- Introduction to gradient descent\n- Learning rate and its importance\n- Training, validation, and test datasets\n\n\nUNIT 2: Artificial Neural Networks\n- Feedforward neural networks\n- Multilayer perceptrons (MLP)\n- Activation functions\n- Sigmoid activation function\n- Tanh activation function\n- ReLU activation function\n- Leaky ReLU\n- Softmax activation function\n- Loss functions for regression\n- Mean Squared Error\n- Mean Absolute Error\n- Loss functions for classification\n- Binary Cross-Entropy\n- Categorical Cross-Entropy\n- Forward propagation in neural networks\n- Backpropagation\n- Chain rule and computational graphs\n- Gradient calculation\n- Gradient descent optimization\n- Batch gradient descent\n- Stochastic gradient descent\n- Mini-batch gradient descent\n\n\nUNIT 3: Training and Optimization of Neural Networks\n- Challenges in training deep neural networks\n- Vanishing gradient problem\n- Exploding gradient problem\n- Weight initialization\n- Xavier/Glorot initialization\n- He initialization\n- Batch normalization\n- Layer normalization\n- Optimizers\n- Stochastic Gradient Descent (SGD)\n- Momentum\n- AdaGrad\n- RMSProp\n- Adam optimizer\n- AdamW optimizer\n- Learning rate scheduling\n- Early stopping\n- Model checkpointing\n- Hyperparameter tuning\n- Batch size\n- Number of epochs\n- Learning rate\n- Network depth and width\n\n\nUNIT 4: Regularization and Improving Model Generalization\n- Overfitting and underfitting\n- Bias-variance tradeoff\n- Regularization techniques\n- L1 regularization\n- L2 regularization\n- Weight decay\n- Dropout\n- Data augmentation\n- Early stopping\n- Batch normalization as a regularization technique\n- Cross-validation\n- Training and validation curves\n- Model generalization\n- Techniques for improving model performance\n- Hyperparameter optimization\n\n\nUNIT 5: Convolutional Neural Networks\n- Introduction to computer vision\n- Image representation and image tensors\n- Convolution operation\n- Convolution filters and kernels\n- Feature maps\n- Stride\n- Padding\n- Pooling operations\n- Max pooling\n- Average pooling\n- Receptive fields\n- CNN architecture\n- Convolutional layers\n- Pooling layers\n- Fully connected layers\n- Flattening\n- CNN training process\n- Image classification using CNNs\n- Data augmentation for image datasets\n- Transfer learning for image classification\n- Popular CNN architectures\n- LeNet\n- AlexNet\n- VGG\n- GoogLeNet/Inception\n- ResNet\n\n\nUNIT 6: Recurrent Neural Networks\n- Introduction to sequential data\n- Sequence modeling\n- Limitations of feedforward neural networks for sequential data\n- Recurrent Neural Networks (RNNs)\n- Basic RNN architecture\n- Hidden states\n- Forward propagation through time\n- Backpropagation Through Time (BPTT)\n- Vanishing and exploding gradients in RNNs\n- Long Short-Term Memory (LSTM)\n- LSTM architecture\n- Forget gate\n- Input gate\n- Output gate\n- Cell state\n- Gated Recurrent Unit (GRU)\n- Comparison between RNN, LSTM, and GRU\n- Applications of recurrent neural networks\n- Time-series prediction\n- Text classification\n- Sequence generation\n\n\nUNIT 7: Natural Language Processing with Deep Learning\n- Introduction to Natural Language Processing\n- Text preprocessing\n- Tokenization\n- Vocabulary creation\n- Stop-word removal\n- Stemming and lemmatization\n- Word embeddings\n- Word2Vec\n- GloVe\n- Embedding layers\n- Sequence representation\n- RNN-based language models\n- LSTM-based NLP models\n- Text classification using deep learning\n- Sentiment analysis\n- Named Entity Recognition\n- Sequence-to-sequence models\n- Encoder-decoder architecture\n- Attention mechanism\n- Introduction to Transformers\n\n\nUNIT 8: Attention Mechanisms and Transformers\n- Limitations of traditional RNN-based architectures\n- Motivation behind attention mechanisms\n- Attention mechanism\n- Query, Key, and Value concepts\n- Scaled dot-product attention\n- Self-attention\n- Multi-head attention\n- Positional encoding\n- Transformer architecture\n- Encoder and decoder blocks\n- Feedforward neural networks in Transformers\n- Layer normalization and residual connections\n- Transformer-based language models\n- BERT\n- GPT\n- T5\n- Applications of Transformers\n- Text generation\n- Text classification\n- Question answering\n- Introduction to large language models\n\n\nUNIT 9: Autoencoders and Generative Deep Learning\n- Introduction to generative models\n- Autoencoders\n- Encoder and decoder architecture\n- Latent representation\n- Reconstruction loss\n- Applications of autoencoders\n- Denoising autoencoders\n- Sparse autoencoders\n- Variational Autoencoders (VAEs)\n- Latent space in VAEs\n- Generative Adversarial Networks (GANs)\n- Generator and discriminator\n- GAN training process\n- Common GAN architectures\n- Applications of GANs\n- Image generation\n- Image-to-image translation\n- Introduction to diffusion models\n- Applications of generative deep learning\n\n\nUNIT 10: Deep Learning Frameworks and Deployment\n- Introduction to deep learning frameworks\n- TensorFlow\n- Keras\n- PyTorch\n- Tensors and tensor operations\n- Building neural networks using TensorFlow/Keras\n- Building neural networks using PyTorch\n- Dataset and data loaders\n- Model training and evaluation\n- Saving and loading trained models\n- Model serialization\n- GPU acceleration\n- Training models using GPUs\n- Model inference\n- Model evaluation metrics\n- Accuracy\n- Precision\n- Recall\n- F1-score\n- Confusion matrix\n- Regression evaluation metrics\n- Model deployment\n- REST APIs for deep learning models\n- Deploying deep learning models to the cloud\n- Introduction to model optimization\n- Quantization\n- Pruning\n- Monitoring deployed deep learning models\n\n            The output must be a valid JSON object only. It should be structured exactly as shown below, without any additional text, commentary, or formatting:\n\n            {\n                "title": "Generated Title for Roadmap",\n                "roadmap": [\n                    {\n                        "id": "1",\n                        "step": "Step 1",\n                        "description": "Detailed guidance for the first step, including specific tasks based on the student\'s subject, education level, and remaining time."\n                    },\n                    {\n                        "id": "2",\n                        "step": "Step 2",\n                        "description": "Detailed guidance for the second step, focusing on progressing further in the syllabus and adjusting based on daily study hours."\n                    },\n                    ...\n                    {\n                        "id": "n",\n                        "step": "Step n",\n                        "description": "Detailed guidance for the final step, wrapping up revision and preparing for the exam day."\n                    }\n                ]\n            }\n\n            Respond with only the JSON object and ensure it is well-formed, valid, and properly indented.',
        },
        {
          role: "assistant",
          content:
            '{\n    "title": "Undergraduate Deep Learning Exam Preparation Roadmap (35 Days)",\n    "roadmap": [\n        {\n            "id": "1",\n            "step": "Step 1",\n            "description": "Day 1‑3: Review foundational concepts. Read introductory sections of UNIT 1, focusing on AI vs ML vs DL, types of learning, biological vs artificial neurons, perceptron basics, and the overall structure of neural networks. Create concise summary notes and flashcards for terminology."\n        },\n        {\n            "id": "2",\n            "step": "Step 2",\n            "description": "Day 4‑6: Deep dive into forward propagation, loss functions, and gradient descent basics from UNIT 1. Implement a simple perceptron in Python (NumPy) to solidify understanding of weights, biases, activation functions, and learning rate effects."\n        },\n        {\n            "id": "3",\n            "step": "Step 3",\n            "description": "Day 7‑10: Study UNIT 2 (ANNs). Cover feed‑forward networks, MLP architecture, and all activation functions (Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax). Complete coding exercises building an MLP for MNIST classification, experimenting with different activations."\n        },\n        {\n            "id": "4",\n            "step": "Step 4",\n            "description": "Day 11‑13: Master loss functions and backpropagation. Work through derivations of MSE, MAE, Binary Cross‑Entropy, and Categorical Cross‑Entropy. Implement backpropagation manually for a two‑layer network to see gradient flow."\n        },\n        {\n            "id": "5",\n            "step": "Step 5",\n            "description": "Day 14‑16: Explore optimization strategies in UNIT 3. Study gradient‑descent variants (batch, stochastic, mini‑batch) and common optimizers (SGD, Momentum, AdaGrad, RMSProp, Adam, AdamW). Run comparative experiments on a small dataset to observe convergence speed."\n        },\n        {\n            "id": "6",\n            "step": "Step 6",\n            "description": "Day 17‑19: Focus on training challenges and regularization from UNIT 4. Implement Xavier/Glorot and He initializations, batch/layer normalization, dropout, L1/L2 penalties, and early stopping. Record validation curves to detect over/under‑fitting."\n        },\n        {\n            "id": "7",\n            "step": "Step 7",\n            "description": "Day 20‑22: Study CONVOLUTIONAL NEURAL NETWORKS (UNIT 5). Review image tensors, convolution arithmetic, pooling, and architecture design. Build a CNN from scratch for CIFAR‑10, then experiment with transfer learning using a pre‑trained ResNet."\n        },\n        {\n            "id": "8",\n            "step": "Step 8",\n            "description": "Day 23‑25: Cover RECURRENT NEURAL NETWORKS (UNIT 6). Implement basic RNN, LSTM, and GRU cells. Train a language‑modeling task on a small text corpus, observing vanishing/exploding gradients and applying gradient clipping."\n        },\n        {\n            "id": "9",\n            "step": "Step 9",\n            "description": "Day 26‑27: Dive into NLP applications (UNIT 7). Perform text preprocessing, tokenization, and embedding creation (Word2Vec/GloVe). Build an LSTM‑based sentiment classifier and evaluate using precision, recall, and F1‑score."\n        },\n        {\n            "id": "10",\n            "step": "Step 10",\n            "description": "Day 28‑29: Study attention mechanisms and Transformers (UNIT 8). Understand scaled dot‑product attention, multi‑head attention, and positional encoding. Implement a simple Transformer encoder in PyTorch and run a translation demo."\n        },\n        {\n            "id": "11",\n            "step": "Step 11",\n            "description": "Day 30‑31: Explore generative models (UNIT 9). Build a Variational Autoencoder for MNIST and a basic GAN for image generation. Analyze reconstruction loss and GAN stability tricks (label smoothing, learning‑rate scheduling)."\n        },\n        {\n            "id": "12",\n            "step": "Step 12",\n            "description": "Day 32‑33: Review deep‑learning frameworks and deployment (UNIT 10). Practice model building in TensorFlow/Keras and PyTorch, save/load checkpoints, and create a REST API using FastAPI to serve a trained model. Experiment with GPU acceleration if available."\n        },\n        {\n            "id": "13",\n            "step": "Step 13",\n            "description": "Day 34: Consolidated revision. Re‑visit flashcards, key formulas, and common pitfalls for each unit. Perform timed mock questions covering theory and coding. Identify any weak spots and allocate brief review sessions."\n        },\n        {\n            "id": "14",\n            "step": "Step 14",\n            "description": "Day 35 (Exam Day): Light review of summary notes, mental relaxation techniques, and logistics check (exam time, materials). Ensure adequate rest and confidence before the Deep Learning exam."\n        }\n    ]\n}',
        },
        {
          role: "user",
          content: generateStudentRoadmapPrompt,
        },
      ],
      model: "openai/gpt-oss-20b",
    });

    const resFromAI = res?.choices[0]?.message?.content;

    const resFromAIParsed = JSON.parse(resFromAI);

    if (resFromAIParsed) {

      const dataStored = await primsaClientConfig.roadMap.create({
        data: {
          studentSubjectName: roadmapData.studentSubjectName,
          studentEducationLevel: roadmapData.studentEducationLevel,
          averageDailyStudyHours: roadmapData.averageDailyStudyHours,
          studentExamName: roadmapData.studentExamName,
          daysRemainingUntilExam: roadmapData.daysRemainingUntilExam,
          syllabusTopics: roadmapData.syllabusTopics,
          responseFromModel: resFromAIParsed,
          emailOfTheProfileWhoGeneratedRoadmap: user?.email,
        },
      });

      return {
        success: true,
        message: "your personalized roadmap has been generated successfully",
        data: dataStored,
      };

    }

    return {
      success: false,
      message: "something went wrong while generating roadmap",
    };

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: error?.message || "Something went wrong. Please try again after sometime",
    };

  }

};


export const fetchAllRoadmapsByTheUser = async () => {

  try {

    const user = await getAuthUserDetails();

    const allRoadmapsByTheUser = await primsaClientConfig.roadMap.findMany({
      where: {
        emailOfTheProfileWhoGeneratedRoadmap: user?.email,
      },
    });

    return allRoadmapsByTheUser;

  } catch (error) {

    return {

      success: false,
      message:
        error?.message || "Something went wrong. Please try again after sometime",
    };

  }

};


export const fetchParticularRoadmapById = async (roadmapId) => {

  try {

    const roadmap = await primsaClientConfig.roadMap.findUnique({
      where: {
        id: roadmapId,
      },
    });

    return {
      success: true,
      data: roadmap,
    };

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: error?.message || "something went wrong, please try again",
    };

  }

};


export const deleteRoadmapById = async (id) => {

  try {

    await primsaClientConfig.roadMap.delete({
      where: {
        id: id,
      },
    });

    return {
      success: true,
      message: "Roadmap data has been deleted successfully",
    };

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: error?.message || "Something went wrong. Please try again later",
    };

  }

};
