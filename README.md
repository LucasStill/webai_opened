# WebAI - Help train LLMs navigate the web


WebAI is an open-sourced project that is a copy of the current code running on https://webai.ai. The project was initially built as a personal project, and therefore, the code was written quickly to meet performance requirements. This open-source project will require some refactoring of the code to improve its quality and structure.

The project is written in Rust, a fast and efficient programming language that is ideal for building high-performance web applications. The application is split into two components: a front-end side with basic web utils and the collection script, and a back-end server built using Rust. 

This repository is only used as a vitrine, as the prototype code and current internal functionalities are not yet open-sourced. This repository will be updated in the coming weeks with these changes

- Frontend GYM environement to train autonomous agents navigate the web through better data labelling and context-wise descriptors
- Dataset explorer
- HuggingFace API to test the models on the pages
- New scripts for release of different data collection targeting numerous web navigation tasks: summarization, description, NER, ER
- and of course code-wise a bit of comment cleaning + change of the current test functions that are not unit testing towards deployment tests instead.
