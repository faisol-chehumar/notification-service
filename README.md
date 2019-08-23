# Line Notification Service with Messaging API

## POST url/api/NotificationLine

Send message to line group.

- Content-Type: application/json

```json params
{
  "botChannel": "TS_OA",
  "userIds": ["1", "3", "5"],
  "messages": "[
    {
      "type": "text",
      "text": "Hello"
    }
  ]"
}
```

===
