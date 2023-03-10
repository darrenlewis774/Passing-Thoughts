export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

.AddThoughtForm input {
  padding: 1.5rem;
  border: 1px solid #666;
  border-radius: 3px;
}

.AddThoughtForm input[type='text'] {
  flex-grow: 1;
  margin-right: 0.5rem;
}

.thoughts {
  list-style-type: none;
  padding: 0;
}

.Thought {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  background-color: #eee;
}

.Thought .remove-button {
  font-size: 80%;
  float: right;
  border: 0;
  border-radius: 3px;
  background: transparent;
}

.Thought .remove-button:hover {
  color: #fff;
  background-color: #000;
}
