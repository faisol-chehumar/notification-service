# Line Notification Service with Messaging API

## POST url/api/NotificationLine

Send message to line group.

- Content-Type: application/json

```json params
{
  // ชื่อ Bot Channel จาก Line Provinder
  "botChannel": "TS_OA",
  // UserIds ของ line
  "userIds": ["1", "3", "5"],
  // ข้อความที่ต้องการส่งไป
  "messages": "[
    {
      "type": "text",
      "text": "Hello"
    }
  ]"
}
```

===
