{
    "alerts": [
      {
        "id": "alert_001",
        "severity": "high",
        "description": "Mimicry attack detected on Firefox process.",
        "time_occurred": "2024-09-18T14:35:00Z",
        "graph_data": {
          "nodes": [
            { "id": "node_1", "type": "process", "name": "Firefox" },
            { "id": "node_2", "type": "file", "name": "/home/admin/clean" },
            { "id": "node_3", "type": "network", "name": "161.116.88.72" }
          ],
          "edges": [
            { "source": "node_1", "target": "node_2", "action": "write" },
            { "source": "node_1", "target": "node_3", "action": "connect" }
          ]
        }
      },
      {
        "id": "alert_002",
        "severity": "medium",
        "description": "Suspicious child process detected from SSH daemon.",
        "time_occurred": "2024-09-18T15:20:00Z",
        "graph_data": {
          "nodes": [
            { "id": "node_4", "type": "process", "name": "sshd" },
            { "id": "node_5", "type": "process", "name": "unknown_child_process" }
          ],
          "edges": [
            { "source": "node_4", "target": "node_5", "action": "spawn" }
          ]
        }
      },
      {
        "id": "alert_003",
        "severity": "low",
        "description": "File access anomaly detected in system logs.",
        "time_occurred": "2024-09-18T16:10:00Z",
        "graph_data": {
          "nodes": [
            { "id": "node_6", "type": "process", "name": "syslogd" },
            { "id": "node_7", "type": "file", "name": "/var/log/syslog" }
          ],
          "edges": [
            { "source": "node_6", "target": "node_7", "action": "read" }
          ]
        }
      }
    ]
  }
  