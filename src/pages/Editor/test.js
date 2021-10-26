const data = [
  {
    "type": "ec-line",
    "classes": [
      "ec-dm"
    ],
    "attributes": {}
  },
  {
    "type": "image",
    "attributes": {
      "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+",
      "id": "ibgn"
    }
  },
  {
    "tagName": "h1",
    "type": "text",
    "attributes": {
      "id": "id5g"
    },
    "components": [
      {
        "type": "textnode",
        "content": "编辑器"
      }
    ]
  }
]

export function LoadData(editor) {
  // editor.loadData(data)
  editor.addComponents(data);
}