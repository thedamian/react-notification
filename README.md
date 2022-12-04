# Getting Started with Create React App

# Simple React Notification Example with ntfy.sh

In this example we are creating a super simple notification example using the magic of ntfy.sh 

## Why are we using ntfy.sh?
The truth is that it costs us almost nothing to host a function in a cloud provider, then keep track of each customer that comes and if they need apple, or google, or firefox or other notification services and send them the right notification....<BR>
Or<BR>
we use nfty.sh.<BR>
This is ONLY a solution if we are online and get a notification about an event that happened on the server. So a pizza or coffee place could use it easily on a page where the customer wants to get notified not only on the page (something websockets could do) but also when on their device's notification area.


## How does this magic work?
1) We connect to the websocket nfty provides. (no backend for us no siree)
2) when we hear a notification (sent by the code below), we use the browser notification code and tell the notification what to do once it is clicked.
3) We enjoy life!

## Example of how to call this by hitting and endpoint 
Simply run this on your Mac, Linux or WSL terminal (or change it for powershell)
```
curl \
 -H "Title: Title of Notification" \
 -H "Priority: urgent" \
 -H "Tags: warning,skull" \
 -d "main message in notification" \
https://ntfy.sh/DamiansNotificationExample
```

## The strucker of the message coming from nfty.sh is
```
id: string
time: string
event: string
topic:string
title: string
message: string
tags: string
```
