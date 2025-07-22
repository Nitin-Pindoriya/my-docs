---
title: How to Change language String value
---

## How to Change language String value

### 1. Go to lib > Language > go to your language code. Here you can change any string as you want

![eShop](/img/flutter/lan2.png)

### 2. If you want to update this string for all supported languages, repeat the process in each language's JSON file, ensuring the new value is consistent across all files.

- For example, If you want to change "Welcome to eShop" string in your app then find that string in lib -> language folder .json files and replace with your string.

- **Example:**
To change the welcome message in English, open `lib/language/en.json` and update the value. For example, change:
```json
"welcome": "Welcome to eShop"
```
to
```json
"welcome": "Hello and welcome!"
``` 
