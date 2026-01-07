# Development Guide

This document describes the local development workflow for this repository.

## Prerequisites

- Python 3.10+
- uv
- Git

## Environment setup

1. Copy the repository:
   ```bash
   git clone https://github.com/europass-unofficial/europass-schema-docs.git
   cd europass-schema-docs
   ```

2. Create a virtual environment in the repository root:
   ```bash
   uv venv
   ```

3. Activate the environment:
   ```bash
   # Linux/MAC
   .venv/bin/activate

   # Windows (PowerShell): 
   .venv\Scripts\activate
   ```

4. Install dependencies:
   ```bash
   uv pip install -r requirements.txt
   ```

5. Run the documentation site locally:
   ```bash
   mkdocs serve
   ```
