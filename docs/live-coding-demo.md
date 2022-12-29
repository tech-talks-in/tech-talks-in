---
slug: live-coding-demo
title: Live Coding Demo
sidebar_position: 3
description: Implementing live coding on a website powered by Docusaurus
---

Wondering how the live coding is implemented on [Playground blog](../blog/live-coding-demo)? well here are the steps to do with the power of react and Docusarus

- Install live coding package ` npm i @docusaurus/theme-live-codeblock `
- Open docusaurus.config.js, go the end and add below 
     ```
        themes: ['@docusaurus/theme-live-codeblock']
     ```
- create new doc with .md extension
- include your code in between 3 backticks and type **jsx live** immediately after opening backtics with a space  `(``` jsx live)`


``` jsx live
function LiveCode(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
        <h1>{count} </h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <span> </span>
        <button onClick={() => setCount(count - 1)}>Sub</button>
        </div>
    )
}

```