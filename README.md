# Quesslyn 🚀📚

[![Quesslyn Demo Video](/images_for_readme/thumbnail_img.png)](https://www.youtube.com/watch?v=543kulhJG8w)

_Quesslyn is an AI-powered academic learning assistant that helps students plan their studies, generate important Q&A, and organize useful learning resources. Click the image above to watch the project demo video on YouTube._

---

## Contents

- [Introduction](#introduction)
- [Features of the Application](#features-of-the-application)
  - [User Features](#user-features)
  - [Admin Features](#admin-features)
- [Whom is this project for?](#whom-is-this-project-for)
- [How Quesslyn Works](#how-quesslyn-works)
  - [Administrative Workflow](#administrative-workflow)
- [Deployment Link](#deployment-link)
- [Technologies Used](#technologies-used)
- [Disclaimer](#disclaimer)

---

## Introduction

**Quesslyn** is an AI-powered web application designed to simplify and enhance the academic learning experience for students.

It provides students with personalized AI-powered study roadmaps, automated question-and-answer generation, and organized YouTube study resources, allowing them to plan, practice, and manage their learning journey from one unified platform.

Quesslyn also includes an administrative dashboard that allows administrators to monitor users, manage educational content, view platform statistics, and manage banned users.

---

## Features of the Application

### User Features

1. **AI-Powered Roadmaps** 🗺️
   Create tailored study plans based on your syllabus and learning requirements. Quesslyn uses AI to break down the syllabus into structured learning roadmaps.

2. **Topic-Based QnA Generator** ❓💡
   Generate 10 customized questions and answers for any topic. Simply provide a topic and its description, and Quesslyn generates relevant Q&A for learning and revision.

3. **YouTube Study Guides** 🎥📖
   Save, organize, and access useful YouTube videos for your studies. Keep educational video resources in one convenient place for easier revision and learning.

4. **Pagination** 📄➡️
   Navigate through roadmaps, YouTube resources, and QnA sets using paginated sections, with 3 items displayed per page.

5. **Content Deletion** ❌🗂️
   Manage your saved content by deleting roadmaps, QnA sets, or YouTube resources that are no longer needed.

---

### Admin Features

1. **Admin Dashboard** 📊
   View important platform statistics, including the total number of users, roadmaps, QnA sets, and YouTube resources.

2. **User Management** 🛠️👥
   View detailed information about users, including their user IDs, names, email addresses, and created content.

3. **Ban/Unban Users** 🚫✔️
   Administrators can ban users by providing a reason and can also unban previously banned users.

4. **Content Management** ✂️📑
   Administrators can manage platform content by deleting roadmaps, QnA sets, or YouTube resources created by users when necessary.

5. **Pagination** 📄➡️
   Admin content is organized using pagination, with 3 items displayed per page for easier navigation.

---

## Whom is this project for?

Quesslyn is primarily designed for:

- 🎓 **Students** who want to organize and improve their learning process.
- 📚 **Students preparing for examinations** who need structured study roadmaps and topic-based Q&A.
- 🧠 **Learners who want AI-assisted study planning** based on their syllabus.
- 🎥 **Students who use YouTube for learning** and want to keep useful educational videos organized.
- 👨‍👩‍👧 **Parents** who want a centralized platform that supports their children's academic learning and organization.
- 👨‍💻 **Administrators** who need tools to manage users, educational content, and platform statistics.

---

## How Quesslyn Works

The overall workflow of Quesslyn can be represented as follows:

```text
                    ┌─────────────────────┐
                    │         User        │
                    └──────────┬──────────┘
                               │
                               ▼
                  ┌─────────────────────────┐
                  │     Choose a Feature    │
                  └────────────┬────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  Study Roadmap  │   │   Top 10 QnAs   │   │  YouTube Guides │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                     │
         ▼                     ▼                     ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  Enter Syllabus │   │  Enter Topic &  │   │ Save Educational│
│   Information   │   │   Description   │   │      Videos     │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │  AI Processing  │
                      │   & Generation  │
                      └────────┬────────┘
                               │
                               ▼
                ┌─────────────────────────────┐
                │  Organized Learning Content │
                └──────────────┬──────────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │ Student Studies │
                      │    & Revises    │
                      └─────────────────┘
```

### Administrative Workflow

```text
                       ┌─────────────────────┐
                       │        Admin        │
                       └──────────┬──────────┘
                                  │
                                  ▼
                       ┌─────────────────────┐
                       │   Admin Dashboard   │
                       └──────────┬──────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│  User Management  │   │ Content Management│   │   Platform Stats  │
└─────────┬─────────┘   └─────────┬─────────┘   └─────────┬─────────┘
          │                       │                       │
          ▼                       ▼                       ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│    Ban / Unban    │   │    Delete User    │   │    View Counts    │
│       Users       │   │      Content      │   │    & Analytics    │
└───────────────────┘   └───────────────────┘   └───────────────────┘
```

---

## Deployment Link

**Live Preview:** 🔗 [Quesslyn](https://quesslyn.vercel.app/)

---

## Technologies Used

- **Next.js** 🚀: Framework for building fast, server-rendered web applications.
- **ShadCN UI** 🎨: UI component library used to build a clean and responsive interface.
- **Tailwind CSS** 💨: Utility-first CSS framework used for application styling.
- **React Hook Form** 📝: Used for efficient form handling and validation.
- **Zod** ✅: Used for data validation across the application.
- **React Hot Toast** 🔔: Used to display user-friendly notifications.
- **Prisma** 🛠️: ORM used for seamless database interaction.
- **Neon PostgreSQL** 💾: Cloud-hosted PostgreSQL database used for storing application data.
- **Kinde Authentication** 🔐: Used for user authentication and secure login.
- **GroqCloud + openai/gpt-oss-20b** 🤖: Provides fast AI-powered generation of personalized study roadmaps and topic-based Top 10 Q&A sets.
- **Recharts** 📊: Used in the admin dashboard to visualize platform statistics such as the number of users, YouTube guides, roadmaps, and QnAs.

---

## Disclaimer

The creator of this application is not responsible for any incorrect or inaccurate content generated by the **openai/gpt-oss-20b** model, as AI-generated content may contain errors and operates beyond the creator's direct control.
